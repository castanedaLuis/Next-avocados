import { SET_FAVORITE, SET_LOADING, SET_AVOCADOS, GET_AVOCADOS } from './types';


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

  export const getAvocados = (payload) => ({
    type: GET_AVOCADOS,
    payload,
  });