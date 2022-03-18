import { IEpisodeRawResponse } from './../../../dist/modules/episodes/interfaces/episode.interface.d';
import { ICharacter } from '../interfaces/character.interface';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ICharacterRawResponse } from '../interfaces/character.interface';

@Injectable()
export class ProxyService {
  constructor(private httpService: HttpService) {}

  async getAllCharacters(): Promise<ICharacterRawResponse> {
    const { data } = await firstValueFrom(
      this.httpService.get<ICharacterRawResponse>('/character'),
    );
    return data;
  }

  async getCharactersPaginated(page: number): Promise<ICharacterRawResponse> {
    const { data } = await firstValueFrom(
      this.httpService.get<ICharacterRawResponse>(`/character/?page=${page}`),
    );
    return data;
  }

  async getCharacterById(id: string): Promise<ICharacter[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<ICharacter[] | ICharacter>(`/character/${id}`),
    );
    if (Array.isArray(data)) return data;
    return [data];
  }

  async getEpisodesByCharacterID(id: string): Promise<IEpisodeRawResponse> {
    const characters = await this.getCharacterById(id);
    const episodes2D = characters.map((character) => character.episode);
    const episodes = episodes2D.flat();
    const episodeIds = episodes.map((episode) => episode.split('/').pop());
    const { data } = await firstValueFrom(
      this.httpService.get<IEpisodeRawResponse>(`/episode/${episodeIds}`),
    );
    return data;
  }
}
