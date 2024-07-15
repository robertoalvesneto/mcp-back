import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { MinioUploadModule } from 'src/minio/minio.module';

@Module({
  imports: [MinioUploadModule],
  providers: [ImageService],
  controllers: [ImageController],
})
export class ImageModule {}
