import { prisma } from "../../../lib/prisma";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: req.user.id
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