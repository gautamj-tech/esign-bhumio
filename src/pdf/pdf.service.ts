// pdf.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as pdf from 'pdf-parse';

@Injectable()
export class PdfService {
  async loadPdf(filePath: string): Promise<string> {
    try {
      return await fs.promises.readFile(filePath, 'utf8');
    } catch (error) {
      throw new NotFoundException('PDF not found');
    }
  }

  async previewPdf(filePath: string): Promise<string> {
    try {
      const dataBuffer = await fs.promises.readFile(filePath);
      const data = await pdf(dataBuffer);
      return data.text;
    } catch (error) {
      throw new NotFoundException('PDF not found');
    }
  }
}
