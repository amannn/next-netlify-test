import { NextResponse } from "next/server";
import { POSTS_IN_ITALIAN, POSTS_IN_ENGLISH } from "./posts";

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
        posts: POSTS_IN_ITALIAN,
      });
    }

    return NextResponse.json({
      posts: POSTS_IN_ENGLISH,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch posts" });
  }
}
