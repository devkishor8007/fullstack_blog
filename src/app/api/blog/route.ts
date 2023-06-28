import getCurrentUser from "@/app/action/getCurrentUser";
import prisma from "../../../prisma.config/prisma.db"
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return null
    }

    const body = await request.json()

    const { title, description } = body

    const blog = await prisma.blog.create({
        data: {
            title,
            description,
            createdBy: currentUser.id,
            like: 0
        }
    })

    return NextResponse.json(blog)
}