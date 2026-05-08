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
		const {name, email, password} = await req.json();
		const user = await prisma.user.create({
			data: {
				name,
				email,
				password
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