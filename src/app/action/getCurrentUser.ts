import { getServerSession } from "next-auth";
import { authOpions } from "../api/auth/[...nextauth]/route";
import prisma from "../../prisma.config/prisma.db"

export async function getSession() {
    return await getServerSession(authOpions)
}

export default async function getCurrentUser() {
    try {
        const session = await getSession()

        if (!session?.user?.email) {
            return null
        }

        const currentUser = await prisma.user.findFirst({
            where: {
                email: session.user.email as string
            }
        })

        if (!currentUser) {
            return null
        }

        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
        }
    } catch (error) {
        return null
    }
}