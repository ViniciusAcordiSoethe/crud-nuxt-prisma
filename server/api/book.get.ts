import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  const books = await prisma.book.findMany()
  return {
    statusCode: 200,
    body: books,
  }
})