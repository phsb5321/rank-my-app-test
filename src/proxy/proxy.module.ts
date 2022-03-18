import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ProxyController } from './controller/proxy.controller';
import { ProxyService } from './service/proxy.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://rickandmortyapi.com/api',
    }),
  ],
  providers: [ProxyService],
  controllers: [ProxyController],
})
export class ProxyModule {}
