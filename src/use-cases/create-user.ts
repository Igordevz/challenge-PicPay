import { z } from "zod"
import { prisma } from "../lib/prisma"
import { FastifyRequest, FastifyReply } from 'fastify';
export default async function CreateUser(req:FastifyRequest, res:FastifyReply){

  const userSchema = z.object({
    name: z.string().nonempty(),
    cpf: z.string(),
    email: z.string().email("Enter a email valid"),
    password: z.string().min(8, "Please, create password with minimun 8 caracters"),
  })

  const { name, cpf, email, password} = userSchema.parse(req.body)

  const userExist = await prisma.user.findUnique({
    where: {
       cpf
    }
  })

  if(userExist?.email){
    return res.status(401).send({
      error: "This user already exist"
    })
  }
  const createUser = await prisma.user.create({
    data: {
      name,
      cpf,
      email, 
      password,
      balance: 0
    }
  })
  .then((data) => {
    const response = data;
    res.status(201).send({data: response});
  })
  .catch((err) => {
    return res.status(401).send({error: err})
  })

}