import {
  GET_TODO,
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  CHECK_TODO,
  CLEAR_COMPLETED_TODOS,
  FILTER_NOT_COMPLETED_TODOS,
  FILTER_COMPLETED_TODOS,
  ADD_COMMENT,
} from "./totoConstants";
import axios from "axios";
import { defaultApi } from "../backendUrls";

export const obtenerTareas = () => async (dispatch) => {
  const { data } = await axios.get(`${defaultApi}tareas/`);

  dispatch({
    type: GET_TODOS,
    payload: data,
  });
};

export const insertarTarea = (values) => async (dispatch) => {
  const { data } = await axios.post(`${defaultApi}tareas/insertar/`, values);

  dispatch({
    type: ADD_TODO,
    payload: data,
  });
};

export const eliminarTarea = (id) => async (dispatch) => {
  const { data } = await axios.delete(`${defaultApi}tareas/eliminar/${id}/`);
  dispatch({
    type: DELETE_TODO,
    payload: data,
  });
};

export const completarTarea = (id) => async (dispatch) => {
  const { data } = await axios.put(`${defaultApi}tareas/completar/${id}/`);

  dispatch({
    type: CHECK_TODO,
    payload: data,
  });
};

export const deleteCompletados = () => async (dispatch) => {
  const { data } = await axios.put(`${defaultApi}tareas/eliminarCompletados/`);

  dispatch({
    type: CLEAR_COMPLETED_TODOS,
    payload: data,
  });
};

export const filtrarTareasCompletadas = () => async (dispatch) => {
  const { data } = await axios.get(`${defaultApi}tareas/completadas/`);

  dispatch({
    type: FILTER_COMPLETED_TODOS,
    payload: data,
  });
};

export const filtrarTareasNoCompletadas = () => async (dispatch) => {
  const { data } = await axios.get(`${defaultApi}tareas/noCompletadas/`);

  dispatch({
    type: FILTER_NOT_COMPLETED_TODOS,
    payload: data,
  });
};

export const obtenerComentarios = (id) => async (dispatch) => {
  const { data } = await axios.get(`${defaultApi}tarea/detalles/${id}/`);

  dispatch({
    type: GET_TODO,
    payload: data,
  });
};

export const insertarComentario = (values) => async (dispatch) => {
  const { data } = await axios.post(
    `${defaultApi}tarea/insertarComentario/`,
    values
  );

  dispatch({
    type: ADD_COMMENT,
    payload: data,
  });
};
