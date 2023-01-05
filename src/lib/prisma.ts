import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: ['query'], // faz log de todas as querys no db
})
