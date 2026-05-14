import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
    try {
        const authorId = req.headers.get("x-user-id") || "1";
        const formData = await req.formData();
        const content = formData.get("content") as string;
        const image = formData.get("image") as File | null;

        let imageUrl: string | undefined;

        if (image && image.size > 0) {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);
            
            const uploadDir = path.join(process.cwd(), "public/uploads");
            await mkdir(uploadDir, { recursive: true });
            
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            const ext = path.extname(image.name) || '.jpg';
            const filename = `upload-${uniqueSuffix}${ext}`;
            const filepath = path.join(uploadDir, filename);
            
            await writeFile(filepath, buffer);
            imageUrl = `/uploads/${filename}`;
        }

        const post = await prisma.post.create({
            data: {
                content: content || "",
                authorId: Number(authorId),
                ...(imageUrl ? {
                    images: {
                        create: {
                            url: imageUrl
                        }
                    }
                } : {})
            },
            include: {
                images: true
            }
        });

        return NextResponse.json({ message: "Post created successfully", post }, { status: 201 });
    } catch (error) {
        console.error("Error creating post:", error);
        return NextResponse.json({ message: "Something went wrong", error: String(error) }, { status: 422 });
    }
}

export async function GET(req: Request) {
    try {
        const {page, rowPerPage} = await req.json()
        const skip = (page - 1) * rowPerPage;
        const posts = await prisma.post.findMany({
            skip: skip,
            take: rowPerPage,
            orderBy: {
                createdAt: "desc",
            }
        });
        return NextResponse.json({ message: "Post fetched successfully", posts }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong", error: String(error) }, { status: 422 });
    }
}