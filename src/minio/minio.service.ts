import { Injectable } from '@nestjs/common';
import { Client, ClientOptions } from 'minio';

@Injectable()
export class MinioUploadService {
  private readonly minioClient: Client;

  private bucketName = 'images';

  constructor() {
    const minioOptions: ClientOptions = {
      endPoint: process.env.MINIO_ENDPOINT || 'mcp-minio',
      port: parseInt(process.env.MINIO_PORT, 10) || 9000,
      useSSL: false,
      accessKey: process.env.MINIO_ACCESS_KEY || 'minio',
      secretKey: process.env.MINIO_SECRET_KEY || 'minio123',
    };
    this.minioClient = new Client(minioOptions);
  }

  private async ensureBucket(): Promise<void> {
    const status = await this.minioClient.bucketExists(this.bucketName);

    if (!status) await this.minioClient.makeBucket(this.bucketName);
  }

  async uploadImage(base64String: string, filename: string): Promise<void> {
    await this.ensureBucket();

    const buffer = Buffer.from(base64String, 'base64');

    const res = await this.minioClient.putObject(
      this.bucketName,
      filename,
      buffer,
    );

    console.log(res);
  }
}
