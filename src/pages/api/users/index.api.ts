import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'
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

  const userExists = await prisma.user.findUnique({
    where: {
      username: name,
    },
  })

  if (userExists) res.status(400).json({ message: 'Username already exists.' })

  const user = await prisma.user.create({
    data: {
      username: name,
      full_name: fullName,
    },
  })

  setCookie(
    {
      res,
    },
    '@ignitecall:userId',
    user.id,
    {
      maxAge: 60 * 60 * 24 * 7, // ((segundos * minutos) * horas) * dias
      path: '/', // todas as rotas da aplicacao podem acessar
    },
  )

  return res.status(201).json(user)
}
