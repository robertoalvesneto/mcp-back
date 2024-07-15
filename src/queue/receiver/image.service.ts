import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { Message } from 'amqplib';

@Injectable()
export class ImageService {
  @RabbitSubscribe({
    exchange: 'exchange1',
    routingKey: 'image.receiver',
    queue: 'image/receiver',
    queueOptions: { maxLength: 500, durable: true, autoDelete: false },
  })
  imageReceiver(msg: { status: string }, message: Message): void {
    try {
      const routingKey = message.fields.routingKey;
      console.log(msg);
      console.log(routingKey);
    } catch (e) {
      return;
    }
  }
}
