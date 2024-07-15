import { Module } from '@nestjs/common';
import { MinioUploadService } from './minio.service';

@Module({
  providers: [MinioUploadService],
  exports: [MinioUploadService],
})
export class MinioUploadModule {}
