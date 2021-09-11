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

export const todosReducers = (state = { tareas: [] }, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { tareas: action.payload };

    case ADD_TODO:
      const item = action.payload;
      return { ...state, tareas: [...state.tareas, item] };

    case CHECK_TODO:
      const updateItem = action.payload;
      return {
        ...state,
        tareas: state.tareas.map((x) =>
          x.id === updateItem.id ? updateItem : x
        ),
      };

    case CLEAR_COMPLETED_TODOS:
      return {
        ...state,
        tareas: action.payload,
      };

    case DELETE_TODO:
      return {
        ...state,
        tareas: state.tareas.filter((x) => x.id !== action.payload.id),
      };

    case FILTER_NOT_COMPLETED_TODOS:
      return {
        ...state,
        tareas: action.payload,
      };

    case FILTER_COMPLETED_TODOS:
      return {
        ...state,
        tareas: action.payload,
      };

    default:
      return state;
  }
};

export const todoReducer = (state = { tarea: {}, comentarios: [] }, action) => {
  switch (action.type) {
    case GET_TODO:
      const item = action.payload;
      return { ...state, tarea: item, comentarios: item.comentarios };

    case ADD_COMMENT:
      const todo = action.payload;
      return { ...state, tarea: todo, comentarios: todo.comentarios };
    default:
      return state;
  }
};
