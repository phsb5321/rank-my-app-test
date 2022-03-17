import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CharacterController } from './controller/character.controller';
import { CharacterService } from './service/character.service';

@Module({
  imports: [HttpModule],
  providers: [CharacterService],
  controllers: [CharacterController],
})
export class CharacterModule {}
