import { FC } from 'react';
import { useRouter } from 'next/router';
import { Grid, Card, Text, Row } from '@nextui-org/react';

interface Props {
  pokemonId: number;
}

export const FavoriteCard: FC<Props> = ({ pokemonId }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId} onClick={handleClick}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Body>
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
            width={'100%'}
            height={150}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text>#{pokemonId}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
