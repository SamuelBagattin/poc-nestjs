import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from './Entities/client.entity';
import { ClientService } from './services/client.service';
import { ClientController } from './controllers/client/client.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity])],
  providers: [ClientService],
  controllers: [ClientController],
})
export class ClientsModule {}
