export interface PokemonListResponse {
    count:    number;
    next:     string;
    previous?: string;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    img: string;
    name: string;
    url:  string;
    id: number;
}
