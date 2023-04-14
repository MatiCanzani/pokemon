import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { FavoriteCard } from './FavoriteCard';

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {pokemons.map((id) => (
        <FavoriteCard pokemonId={id} />
      ))}
    </Grid.Container>
  );
};
