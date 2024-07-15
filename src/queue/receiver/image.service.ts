import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

import { MinioUploadService } from 'src/minio/minio.service';

@Injectable()
export class ImageService {
  constructor(private readonly minio: MinioUploadService) {}

  @RabbitSubscribe({
    exchange: 'exchange1',
    routingKey: 'image.receiver',
    queue: 'image/receiver',
    queueOptions: { maxLength: 500, durable: true, autoDelete: false },
  })
  imageReceiver(msg: { image: string }): void {
    console.log(msg.image);
    try {
      this.saveImage(msg.image);
    } catch (e) {
      console.log(e);
    }
  }

  saveImage(base64String: string): void {
    const filename = 'image-' + Date.now().toString() + '.jpeg';

    void this.minio.uploadImage(base64String, filename);
  }
}
