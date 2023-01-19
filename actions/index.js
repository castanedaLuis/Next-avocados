import { SET_FAVORITE, SET_LOADING, SET_AVOCADOS } from './types';


export const setAvocados = (payload) => ({
    type: SET_AVOCADOS,
    payload,
  });

  export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
  });
  
  export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload,
  });