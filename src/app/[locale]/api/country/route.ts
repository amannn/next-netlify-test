import { NextResponse } from "next/server";

interface Options {
  params: {
    locale: string;
  };
}

export async function GET(_: Request, { params }: Options) {
  try {
    return NextResponse.json({
      countries: [
        {
          name: "Italy",
          slug: "italy",
        },
        {
          name: "United Kingdom",
          slug: "uk",
        },
      ],
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch continents" });
  }
}
