import type { FastifyInstance } from "fastify";
import CreateUser from "../use-cases/create-user";
import Transfer from "../use-cases/transfer";
import { prisma } from "../lib/prisma";

export default async function  router(fastify: FastifyInstance) {
  
  fastify.get("/", async (req, res) => {
    const response = await prisma.user.findMany({
      include: { 

        History: {
          include: {
            TransferSend:true,
            trasnferReceived: true
          }
        },

      }, 
    
    })
    res.status(200).send(response)
  })
  
  fastify.post("/api/users", CreateUser)
  fastify.post("/transfer", Transfer)

}
