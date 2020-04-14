import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../../services/app.service';
import { DevisEntity } from '../../Models/devis.entity';

@Controller('devis')
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): DevisEntity {
    return this.appService.getHello();
  }

  @Post()
  postHello(@Body() devis: DevisEntity):void {
      console.log(devis)
  }
}
