import { Injectable } from '@nestjs/common';

import { MinioUploadService } from 'src/minio/minio.service';

@Injectable()
export class ImageService {
  constructor(private readonly minio: MinioUploadService) {}

  saveImage(base64String: string): void {
    const filename = 'image-' + Date.now().toString() + '.jpeg';
    void this.minio.uploadImage(base64String, filename);
  }
}
