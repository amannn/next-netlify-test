import { NextResponse } from "next/server";

interface Options {
  params: {
    slug: string;
    locale: string;
  };
}

export async function GET(_: Request, { params }: Options) {
  try {
    return NextResponse.json({
      continent: {
        name: "Europe",
        slu: "europe",
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch continent" });
  }
}
