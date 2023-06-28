import prisma from '../../prisma.config/prisma.db'

export default async function getBlogs(createdBy: string) {
    try {
        const blog = await prisma.blog.findMany({
            where: {
                createdBy
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
        console.log(blog, "blog");

        return blog
    }
    catch (err) {
        return null
    }
}