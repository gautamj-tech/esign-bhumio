import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfModule } from './pdf/pdf.module';
import { EsignModule } from './esign/esign.module';

@Module({
  imports: [PdfModule, EsignModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
