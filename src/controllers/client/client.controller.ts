import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientEntity } from '../../Entities/client.entity';
import { ClientService } from '../../services/client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {
  }

  @Get('one')
  public getClient(): ClientEntity {
    return this.clientService.getClient();
  }

  @Get()
  public getClients(): Promise<ClientEntity[]> {
    return this.clientService.findAll();
  }


  @Post()
  public postClient(@Body() client: ClientEntity): ClientEntity {
    return this.clientService.post(client)
  }
}

