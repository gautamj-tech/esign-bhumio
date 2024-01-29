// pdf.controller.ts
import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get(':filename')
  async loadPdf(@Param('filename') filename: string): Promise<string> {
    const filePath = `./uploads/${filename}`;
    return this.pdfService.loadPdf(filePath);
  }

  @Get('preview/:filename')
  async previewPdf(@Param('filename') filename: string): Promise<string> {
    const filePath = `./uploads/${filename}`;
    return this.pdfService.previewPdf(filePath);
  }
}
