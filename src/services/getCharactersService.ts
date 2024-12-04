import { ApiResponse, Character } from '../types';
import { api } from './api';

export const getCharactersService = async (): Promise<
  ApiResponse<Character>
> => {
  try {
    const response = await api.get('/character');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
