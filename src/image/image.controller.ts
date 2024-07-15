import { Controller, Post, Body } from '@nestjs/common';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('upload')
  async uploadImage(@Body('image') base64Image: string) {
    try {
      await this.imageService.saveImage(base64Image);
      return { message: 'Image saved successfully' };
    } catch (error) {
      return { message: 'Failed to save image', error: error.message };
    }
  }
}
