import { NestFactory } from '@nestjs/core';

import { MqttOptions } from '@nestjs/microservices';

import { microserviceOptions } from './config/rabbit.config';
import { AppModule } from './app.module';

async function application() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MqttOptions>(microserviceOptions);

  app.enableCors();

  await app.startAllMicroservices();

  await app.listen(
    (process.env['PORT'] as string) || '',
    (process.env['HOST'] as string) || '',
  );

  console.log('Running on port:', process.env['PORT']);
}

application().catch((error) => console.log(error));
