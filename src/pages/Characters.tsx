import { useEffect, useState } from 'react';
import { getCharactersService } from '../services/getCharactersService';
import { Character } from '../types';

export const Characters = (): JSX.Element => {
  const [charactersData, setCharactersData] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async (): Promise<void> => {
      try {
        const data = await getCharactersService();
        setCharactersData(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacters();
  }, []);
  console.log(charactersData);

  return <div>{JSON.stringify(charactersData)}</div>;
};
