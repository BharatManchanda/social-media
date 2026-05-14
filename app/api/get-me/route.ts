import { prisma } from "../../../lib/prisma";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const userId = req.headers.get("x-user-id");
        const token = req.cookies.get("token")?.value;

        const user = await prisma.user.findFirst({
            where: {
                id: Number(userId)
            }
        });
        return Response.json(
            {
                message: "Get me successfully",
                user,
                token
            }
        );
    } catch (error) {
        return Response.json(
            {
                message: "Something went wrong",
                error: String(error)
            },
            { status: 422 }
        );
    }
}