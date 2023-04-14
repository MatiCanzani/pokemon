import { FC, useState } from "react";
import { SmallPokemon } from "@/interfaces";
import { Grid, Card, Text, Row } from "@nextui-org/react";
import router from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonGrid: FC<Props> = ({ pokemon }) => {

  const handleClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
      <Card 
      isHoverable 
      isPressable 
      onClick={handleClick}
      >
        <Card.Body>
          <Card.Image src={pokemon.img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
