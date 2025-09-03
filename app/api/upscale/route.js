// app/api/upscale/route.js

import Replicate from "replicate";
import { NextResponse } from "next/server";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req) {
  const { imageUrl, upscale, denoise } = await req.json();

  try {
    const output = await replicate.run(
      "nightmareai/real-esrgan:87f7beebc87cfb2b1b8f3d9fd2ec43c9427c0ff7a2005e3c032e0c1b2a73c6de",
      {
        input: {
          image: imageUrl,
          scale: upscale === "4x" ? 4 : 2,
          face_enhance: denoise !== "none",
        },
      }
    );

    return NextResponse.json({ imageUrl: output });
  } catch (error) {
    console.error("Replicate API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
