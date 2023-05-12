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
      country: {
        name: "Italy",
        slug: "italy",
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch country" });
  }
}
