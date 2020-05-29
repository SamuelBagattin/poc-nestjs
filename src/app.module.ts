import { Module } from '@nestjs/common';
import { ClientsModule } from './clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ClientsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
