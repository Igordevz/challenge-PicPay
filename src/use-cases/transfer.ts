import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export default async function Transfer(req: FastifyRequest, res: FastifyReply) {
  const transferSchema = z.object({
    userId: z.string(),
    cpf: z.string(),
    value: z.number(),
  });

  const { userId, cpf, value } = transferSchema.parse(req.body);

  const user: any = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if(!user){
    return res.status(401).send({msg: 'User not found'})
  }

  const userToId: any = await prisma.user.findUnique({
    where: {
      cpf,
    },
  });
  if(!userToId){
    return res.status(401).send({msg: 'Cannot send to this user because they do not exist'})
  }
  if (user?.balance >= value) {
    const SendAmount = await prisma.history.create({
      data: {
        userId: userToId?.id,
        trasnferReceived: {
          create: {
            value: value,
            name: user?.name,
            cpf: cpf,
            type: "receive",
          },
        },
      },
    });
    const updateSald = await prisma.user.update({
      where: { id: userToId?.id },
      data: {
        balance: { increment: value },
      },
    });
    const updateSaldSend = await prisma.user.update({
      where: { id: user?.id },
      data: {
        balance: { decrement: value },
      },
    });
    if (SendAmount) {
      const myHistory = await prisma.history.create({
        data: {
          userId: user?.id,
          TransferSend: {
            create: {
              value: value,
              name: userToId?.name,
              cpf: cpf,
              type: "send",
            },
          },
        },
      });
      return res.status(201).send(myHistory);
    }
  }
  else{ 
    return res.status(401).send({msg: 'You do not have sufficient balance'})
  }
}
