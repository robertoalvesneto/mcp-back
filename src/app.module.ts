import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueueModule } from './queue/queue.module';
import { ImageModule } from './image/image.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MinioUploadModule } from './minio/minio.module';

@Module({
  imports: [QueueModule, ImageModule, DashboardModule, MinioUploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
