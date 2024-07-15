import { Injectable } from '@nestjs/common';
import { Client, ClientOptions } from 'minio';

@Injectable()
export class MinioService {
  private readonly minioClient: Client;

  private bucketName = 'images';

  constructor() {
    const minioOptions: ClientOptions = {
      endPoint: process.env.MINIO_ENDPOINT || 'localhost',
      port: parseInt(process.env.MINIO_PORT, 10) || 9000,
      useSSL: false,
      accessKey: process.env.MINIO_ACCESS_KEY || 'minio',
      secretKey: process.env.MINIO_SECRET_KEY || 'minio123',
    };

    this.minioClient = new Client(minioOptions);
    this.ensureBucket();
  }

  private async ensureBucket(): void {
    const status = await this.minioClient.bucketExists(this.bucketName);

    if (status) await this.minioClient.makeBucket(this.bucketName);
  }

  async uploadImage(file: Express.Multer.File): Promise<string> {
    const metaData = {
      'Content-Type': file.mimetype,
    };

    return new Promise((resolve, reject) => {
      this.minioClient.putObject(
        this.bucketName,
        file.originalname,
        file.buffer,
        metaData,
      );
    });
  }
}
