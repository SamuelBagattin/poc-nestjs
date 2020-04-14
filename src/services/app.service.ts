import { Injectable } from '@nestjs/common';
import { DevisService } from './devis.service';
import { DevisEntity } from '../Models/devis.entity';

@Injectable()
export class AppService {
  constructor(private readonly devisService: DevisService) {
  }

  getHello(): DevisEntity {
    return {
      name: "hello",
      price: 300,
    };
  }
}
