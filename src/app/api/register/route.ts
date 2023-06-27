import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import prisma from '../../../prisma.config/prisma.db'

export async function POST(request: Request) {
    const body = await request.json()

    const { username, email, password } = body

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {
            email,
            username,
            password: hashPassword
        }
    })

    return NextResponse.json(user)
}

