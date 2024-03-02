import { FastifyRequest, FastifyReply } from "fastify";
import {ListCustomerService} from '../services/ListCustomerService'

class ListCustomerController {
  async  handle(request: FastifyRequest, reply: FastifyReply){
    const listCostumerService = new ListCustomerService

    const customers = await listCostumerService.execute()

    reply.send(customers)
  }
}

export {ListCustomerController}