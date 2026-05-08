import bcrypt from "bcryptjs";
import { prisma } from "../../../../lib/prisma";
import jwt from "jsonwebtoken";

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
        const token = jwt.sign({
            id: user.id,
            email: user.email,
            name: user.name,
        }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log(process.env.JWT_SECRET,"::JWT_SECRET")

        return Response.json({user, token})
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