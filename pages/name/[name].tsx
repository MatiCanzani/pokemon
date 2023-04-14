import { useState } from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';

import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';
import { Layout } from '@/components/layouts';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { getPokemonInfo, localFavorites } from '@/utils';
import confetti from 'canvas-confetti';

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorities, setIsInFavorities] = useState(
    localFavorites.existFavovorite(pokemon.id)
  );

  const onToggleFavoritte = () => {
    localFavorites.toggleFavorities(pokemon.id);
    setIsInFavorities(!isInFavorities);

    if (!isInFavorities) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        angle: -130,
        spread: 160,
        origin: { x: 0.9, y: 0.19 },
      });
    }
  };

  return (
    <Layout title=' A Pokémon'>
      <Grid.Container
        css={{
          marginTop: '5px',
        }}
        gap={2}
      >
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: ' 30px' }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  'no-image.png'
                }
                alt={pokemon.name}
                width='100%'                  
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Text h1 transform='capitalize'>
                {pokemon.name}
              </Text>
              <Button
                shadow
                bordered
                color='warning'
                ghost={!isInFavorities}
                onClick={onToggleFavoritte}
              >
                {isInFavorities ? 'Saved' : 'Save to Favorites'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites</Text>
              <Container direction='row' display='flex'>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<Pokemon>('pokemon/?limit=151');

  const pokemonNames: string[] = data.results.map(
    (pokemon: { name: string }) => pokemon.name
  );

  return {
    paths: pokemonNames.map((name) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: { pokemon: await getPokemonInfo( name ) },
  };
};

export default PokemonByNamePage;
