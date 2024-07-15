import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MinioUploadService } from './minio.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [MinioUploadService],
  exports: [MinioUploadService],
})
export class MinioUploadModule {}
