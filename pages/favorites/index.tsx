import { useEffect, useState } from 'react';
import { Layout } from '@/components/layouts';
import { localFavorites } from '@/utils';
import { FavoritePokemons } from '@/components/pokemon';
import NoFavorites from '@/components/ui/NoPokemons';

const FavoritiesPages = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons);
  }, []);

  return (
    <Layout title='My Favorite Pokémon'>
      {favoritePokemons.length === 0 
      ? ( <NoFavorites /> ) 
      : ( <FavoritePokemons pokemons={favoritePokemons} /> )
      }
    </Layout>
  );
};

export default FavoritiesPages;
