import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const authorId = req.headers.get("x-user-id");
        const data = await req.json();
        const { content } = data;

        const post = await prisma.post.create({
            data: {
                content,
                authorId: Number(authorId),
            }
        });

        return NextResponse.json({ message: "Post created successfully", post }, { status: 201 });
    } catch (error) {
        console.error("Error creating post:", error);
        return NextResponse.json({ message: "Something went wrong", error: String(error) }, { status: 500 });
    }
}