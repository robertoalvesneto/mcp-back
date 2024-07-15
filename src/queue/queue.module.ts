import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';

// My Modules
import { MinioUploadModule } from 'src/minio/minio.module';
import { MqttModule } from '../mqtt/mqtt.module';

// Service
import { AMQPModulesOptions } from '../config/amqp.config';
import { SendCommandService } from './commands/send.command.service';
import { infraredService } from './receiver/infrared.service';
import { ImageService } from './receiver/image.service';
import { IAService } from './receiver/ia.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, AMQPModulesOptions),
    MinioUploadModule,
    MqttModule,
  ],
  providers: [infraredService, ImageService, IAService, SendCommandService],
  exports: [infraredService, ImageService, IAService, SendCommandService],
})
export class QueueModule {}
