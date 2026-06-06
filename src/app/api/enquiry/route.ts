import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir, readFile } from "fs/promises";
import path from "path";

interface EnquiryData {
  fullName: string;
  email: string;
  country: string;
  certifiedDiver: string;
  preferredExpedition: string;
  experienceLevel: string;
  message?: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "enquiries.json");

async function ensureDataFile() {
  try {
    await mkdir(DATA_DIR, { recursive: true });
    try {
      await readFile(DATA_FILE, "utf-8");
    } catch {
      await writeFile(DATA_FILE, "[]", "utf-8");
    }
  } catch {
    // Vercel serverless may have read-only filesystem in some contexts
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: EnquiryData = await request.json();

    if (!body.fullName || !body.email || !body.country) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const enquiry = {
      ...body,
      id: crypto.randomUUID(),
      submittedAt: new Date().toISOString(),
    };

    await ensureDataFile();

    try {
      const existing = await readFile(DATA_FILE, "utf-8");
      const enquiries = JSON.parse(existing);
      enquiries.push(enquiry);
      await writeFile(DATA_FILE, JSON.stringify(enquiries, null, 2), "utf-8");
    } catch {
      // Fallback: log to console in serverless environments
      console.log("New enquiry:", enquiry);
    }

    return NextResponse.json({ success: true, id: enquiry.id });
  } catch {
    return NextResponse.json(
      { error: "Failed to process enquiry" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const data = await readFile(DATA_FILE, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch {
    return NextResponse.json([]);
  }
}
