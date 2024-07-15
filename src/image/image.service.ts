import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ImageService {
  saveBase64Image(base64String: string, filename: string): string {
    // Remove o prefixo data:image/png;base64, se existir
    const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    // Define o caminho do arquivo
    const dirPath = path.join(__dirname, '../../uploads');
    const filePath = path.join(dirPath, filename + '.jpeg');

    // Salva o arquivo no sistema de arquivos
    fs.writeFileSync(filePath, buffer);

    return filePath;
  }
}
