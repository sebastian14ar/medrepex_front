import {
  AGREGAR_UNO,
  CAMBIAR_CANTIDAD,
  BORRAR_UNO,
  BORRAR,
  AGREGAR
} from "../types/storeReducers";
import axios from "axios";

export const agregarUno = item => dispatch => {
  dispatch({
    type: AGREGAR_UNO,
    payload: { ...item, cant: 1 }
  });
};
export const agregar = (item, cant) => dispatch => {
  dispatch({
    type: AGREGAR,
    payload: { ...item, cant: cant }
  });
};
export const eliminar = item => dispatch => {
  dispatch({
    type: BORRAR,
    payload: item
  });
};
export const eliminarUno = item => dispatch => {
  dispatch({
    type: BORRAR_UNO,
    payload: item
  });
};
export const enviarContacto = form => async dispatch => {
  try {
    const respuesta = await axios.post(
      "http://medrepexpress.com:3001/api/contact-us",
      form,
      {headers: {
        'Access-Control-Allow-Origin': '*',
      }},
      {proxy: {
        host: '167.114.96.25',
        port: 3001
      }}
    );
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};

export const enviarPeticion = form => async dispatch => {
  try {
    const respuesta = await axios.post(
      "http://medrepexpress.com:3001/api/req-samples",
      form,
      {headers: {
        'Access-Control-Allow-Origin': '*',
      }},
      {proxy: {
        host: '167.114.96.25',
        port: 3001
      }}
    );
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};

export const enviarInformacion = form => async dispatch => {
  try {
    const respuesta = await axios.post(
      "http://medrepexpress.com:3001/api/req-product-info",
      form,
      {headers: {
        'Access-Control-Allow-Origin': '*',
      }},
      {proxy: {
        host: '167.114.96.25',
        port: 3001
      }}
    );
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};
export const enviarCompra = form => async dispatch => {
  try {
    const respuesta = await axios.post(
      "http://medrepexpress.com:3001/api/shopping-cart",
      form,
      {headers: {
        'Access-Control-Allow-Origin': '*',
      }},
      {proxy: {
        host: '167.114.96.25',
        port: 3001
      }}
    );
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};
