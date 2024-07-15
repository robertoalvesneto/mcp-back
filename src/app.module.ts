import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DashboardModule } from './dashboard/dashboard.module';
import { ImageModule } from './image/image.module';
import { MinioUploadModule } from './minio/minio.module';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [
    QueueModule,
    ImageModule,
    DashboardModule,
    MinioUploadModule,
    MongooseModule.forRoot(
      'mongodb://admin:admin@mcp-mongodb:27017/mydatabase',
    ),
  ],
})
export class AppModule {}
