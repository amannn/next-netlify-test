import { NextResponse } from "next/server";

interface Options {
  params: {
    locale: string;
  };
}

export async function GET(_: Request, { params }: Options) {
  try {
    return NextResponse.json({
      continents: [
        {
          name: "Europe",
          slu: "europe",
        },
        {
          name: "Asia",
          slu: "asia",
        },
      ],
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch continents" });
  }
}
