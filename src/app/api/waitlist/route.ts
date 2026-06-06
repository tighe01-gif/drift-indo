import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir, readFile } from "fs/promises";
import path from "path";

interface WaitlistData {
  name: string;
  email: string;
  country: string;
  preferredExpedition?: string;
  message?: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "waitlist.json");

async function ensureDataFile() {
  try {
    await mkdir(DATA_DIR, { recursive: true });
    try {
      await readFile(DATA_FILE, "utf-8");
    } catch {
      await writeFile(DATA_FILE, "[]", "utf-8");
    }
  } catch {
    // Vercel serverless may have read-only filesystem
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: WaitlistData = await request.json();

    if (!body.name || !body.email || !body.country) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const entry = {
      ...body,
      id: crypto.randomUUID(),
      submittedAt: new Date().toISOString(),
    };

    await ensureDataFile();

    try {
      const existing = await readFile(DATA_FILE, "utf-8");
      const waitlist = JSON.parse(existing);
      waitlist.push(entry);
      await writeFile(DATA_FILE, JSON.stringify(waitlist, null, 2), "utf-8");
    } catch {
      console.log("New waitlist entry:", entry);
    }

    return NextResponse.json({ success: true, id: entry.id });
  } catch {
    return NextResponse.json(
      { error: "Failed to process waitlist submission" },
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
