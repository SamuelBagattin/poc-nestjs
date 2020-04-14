import { Module } from '@nestjs/common';
import { AppController } from './controllers/app/app.controller';
import { AppService } from './services/app.service';
import { DevisService } from './services/devis.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DevisService],
})
export class AppModule {}
