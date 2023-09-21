import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { storage, ref, uploadBytes, getDownloadURL } from "@/lib/firebase";
import { metadata } from "@/app/layout";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  try {
    const data = await req.formData();
    const file = data.get("image") as File;
    const buffer = Buffer.from(await file.arrayBuffer());

    const metadata = {
      contentType: file.type,
    };
    const uploadRef = ref(storage, `image/${crypto.randomUUID()}`);
    await uploadBytes(uploadRef, buffer, metadata);
    const url = await getDownloadURL(uploadRef);
    return NextResponse.json({ url }, { status: 201 });
  } catch (e) {
    console.log(e);
  }

  return NextResponse.error;
}
