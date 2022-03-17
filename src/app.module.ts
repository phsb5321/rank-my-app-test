import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CharacterModule } from './modules/character/character.module';
import { EpisodesModule } from './modules/episodes/episodes.module';

@Module({
  imports: [CharacterModule, EpisodesModule],
  controllers: [AppController],
})
export class AppModule {}
