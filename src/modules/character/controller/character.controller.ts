import { Controller } from '@nestjs/common';
import { CharacterService } from '../service/character.service';
import { ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';

@ApiTags('Character')
@Controller('character')
export class CharacterController {
  constructor(
    private readonly service: CharacterService,
    private httpService: HttpService,
  ) {}
}
