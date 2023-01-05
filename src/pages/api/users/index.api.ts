import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

interface BodyDataType {
  name: string
  fullName: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') res.status(405).end()

  const { name, fullName }: BodyDataType = req.body

  const user = await prisma.user.create({
    data: {
      username: name,
      full_name: fullName,
    },
  })

  return res.status(201).json(user)
}
