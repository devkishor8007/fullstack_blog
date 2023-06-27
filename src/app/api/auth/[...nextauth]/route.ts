import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import prisma from "../../../../prisma.config/prisma.db"
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOpions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'text' },
            },

            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Invalid credentials')
                }

                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials.email
                    }
                })

                if (!user || !user?.password) {
                    throw new Error('Invalid credentials')
                }

                const isCorrect = await bcrypt.compare(
                    credentials.password, user.password
                )

                if (!isCorrect) {
                    throw new Error('Invalid credentials')
                }

                return user;
            }
        })
    ],
    pages: {
        signIn: '/',

    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOpions)
export { handler as GET, handler as POST }
