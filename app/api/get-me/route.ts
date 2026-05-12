import { prisma } from "../../../lib/prisma";

export async function POST(req: Request) {
    try {
        const userId = req.headers.get("x-user-id");
        const user = await prisma.user.findFirst({
            where: {
                id: userId as any
            }
        });
        return Response.json(
            {
                message: "Get me successfully",
                user: user
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