import { Injectable } from '@nestjs/common';
import { ClientEntity } from '../Entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {


  constructor(
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
  ) {
  }

  getClient(): ClientEntity {
    return {
      createdOn: new Date(2020, 5),
      email: 'test@test.com',
      id: 1,
      lastLogin: new Date(2020, 5),
      password: 'zeffeaezf',
      username: 'sdfsdfsdfsdf',
    };
  }

  findAll(): Promise<ClientEntity[]> {
    console.log("testseetsetset")
    return this.clientRepository.find();
  }

  findOne(id: string): Promise<ClientEntity> {
    return this.clientRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.clientRepository.delete(id);
  }

  post(client: ClientEntity): ClientEntity {
    return this.clientRepository.create(client)
  }
}
