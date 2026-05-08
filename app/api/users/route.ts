import bcrypt from "bcryptjs";
import { prisma } from "../../../lib/prisma"

export async function GET() {
	try {
		const users = await prisma.user.findMany();
		return Response.json(users);
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

export async function POST(req: Request) {
	try {
		const {name, email, password, confirmPassword} = await req.json();
		const hashPassword = await bcrypt.hash(password, 10);
		const user = await prisma.user.create({
			data: {
				name,
				email,
				password: hashPassword
			}
		});
		return Response.json(user);
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