import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  const newBook = await prisma.book.create({
    data: { 
        title: body.title,
        author: body.author,
        description: body.description,
    },
  })
  return {
    statusCode: 200,
    body: newBook,
  }
})