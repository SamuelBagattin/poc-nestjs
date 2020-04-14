import { Injectable } from '@nestjs/common';

@Injectable()
export class DevisService {
  getHello(): string {
    return 'Hello World!';
  }
}
