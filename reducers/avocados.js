import { SET_AVOCADOS, SET_FAVORITE, GET_AVOCADOS } from '../actions/types';



  export const avocadosReducer = (state, action) => {
    //console.log('state',state);
    switch (action.type) {
      case SET_AVOCADOS:
        return { ...state,avocados: [...state.avocados,action.payload] };

      case GET_AVOCADOS:
        return {
          ...state
        }
      case SET_FAVORITE:
        const currentPokemonIndex = state.get('pokemons').findIndex((pokemon) => {
          return pokemon.get('id') === action.payload.pokemonId;
        });
  
        if (currentPokemonIndex < 0) {
          return state;
        }
  
        //agregamos favorite al estado
        const isFavorite = state.get('pokemons').get(currentPokemonIndex).get('favorite')
        return state.setIn(['pokemons', currentPokemonIndex,'favorite'],!isFavorite)
  
      // case SET_LOADING:
      //   return { ...state, loading: action.payload };
      default:
        return state;
    }
  };