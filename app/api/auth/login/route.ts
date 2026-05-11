import bcrypt from "bcryptjs";
import { prisma } from "../../../../lib/prisma";
import { signToken } from "@/lib/jwt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const {email, password} = await req.json();
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            }
        })
        if (!user) {
            throw Error("Credential doesn't found.")
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw Error("Credential doesn't found.")
        }
        const token = signToken({
            id: user.id,
            email: user.email,
            name: user.name,
        });
        const response = NextResponse.json({ message: "Login successful", user, token });

        response.cookies.set("token", token, {
            httpOnly: true,
            path: "/",
            secure: process.env.NODE_ENV === "production",
        });

        return response;

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

export {};