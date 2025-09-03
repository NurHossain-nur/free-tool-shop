// ✅ If using app router (Next.js 13+)
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        version: "92856e48c8ea4957aa2fe96279c0d08c68f4706c1edc4694dc9c0c48d3c3f317",
        input: {
          image: "https://replicate.delivery/pbxt/JXqP44yI6hZCHma9OBDwGWDW4AzE9T4RxfHZcrkqroRJPmrMA/output.png",
          scale: 2,
          face_enhance: true,
        },
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
