import { Controller, Get, Param } from '@nestjs/common';
import { ProxyService } from '../service/proxy.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Proxy')
@Controller('proxy')
export class ProxyController {
  constructor(private readonly service: ProxyService) {}

  @Get('all-characters')
  async getAllCharacters() {
    return await this.service.getAllCharacters();
  }

  @Get('characters-paginated/:page')
  async getCharactersPaginated(@Param('page') page: number) {
    return await this.service.getCharactersPaginated(page);
  }

  @Get('characters/:id')
  async getCharacterById(@Param('id') id: string) {
    return await this.service.getCharacterById(id);
  }

  @Get('characters/:id/episode')
  async getEpisodesByCharacterID(@Param('id') id: string) {
    return await this.service.getEpisodesByCharacterID(id);
  }
}
