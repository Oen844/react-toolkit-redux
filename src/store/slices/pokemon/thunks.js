import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"



export const getPokemons = ( page = 0 ) => {
    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        //todo realizar petición http

        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`);
        // const data = await resp.json();
        const {data} = await pokemonApi(`/pokemon?limit=10&offset=${page}`);
        

        dispatch( setPokemons({pokemons: data.results, page: page + 1}) );
    }
} 