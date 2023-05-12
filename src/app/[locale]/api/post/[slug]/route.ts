import { NextResponse } from "next/server";
import { POSTS_IN_ENGLISH, POSTS_IN_ITALIAN } from "../posts";

interface Options {
  params: {
    slug: string;
    locale: string;
  };
}

export async function GET(_: Request, { params }: Options) {
  try {
    if (params.locale === "it") {
      return NextResponse.json({
        post: POSTS_IN_ITALIAN[0],
      });
    }

    return NextResponse.json({
      post: POSTS_IN_ENGLISH[0],
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch post" });
  }
}
