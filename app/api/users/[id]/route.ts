import { prisma } from "../../../../lib/prisma"

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
	try {
		const { id } = await params;
		const { name, email } = await req.json();

		const user = await prisma.user.update({
			where: { id: Number(id) },
			data: {
				name,
				email,
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

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
	try {
		const { id } = await params;
		const user = await prisma.user.delete({
			where: { id: Number(id) }
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
