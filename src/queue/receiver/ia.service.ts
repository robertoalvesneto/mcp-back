import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { Message } from 'amqplib';

@Injectable()
export class IAService {
  @RabbitSubscribe({
    exchange: 'exchange1',
    routingKey: 'ia.receiver',
    queue: 'ia/receiver',
    queueOptions: { maxLength: 500, durable: true, autoDelete: false },
  })
  iaReceiver(msg: { status: string }, message: Message): void {
    try {
      const routingKey = message.fields.routingKey;
      console.log(msg);
      console.log(routingKey);
    } catch (e) {
      return;
    }
  }
}
