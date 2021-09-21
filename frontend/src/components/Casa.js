import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  obtenerTareas,
  insertarTarea,
  eliminarTarea,
  completarTarea,
  deleteCompletados,
  filtrarTareasCompletadas,
  filtrarTareasNoCompletadas,
} from "../redux/todoActions";
import Todos from "./Todos";

function Casa({ history }) {
  const dispatch = useDispatch();
  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

  // Todo Selector
  const { tareas } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(obtenerTareas());
  }, [dispatch, tareaSeleccionada]);

  const insertarTodo = (values) => {
    dispatch(insertarTarea({ titulo: values.titulo }));
  };

  const deleteTarea = (id) => {
    if (id === tareaSeleccionada) {
      setTareaSeleccionada(null);
    }
    dispatch(eliminarTarea(id));
  };

  const checkearTarea = (id) => {
    dispatch(completarTarea(id));
  };

  const eliminarCompletados = () => {
    if (
      tareaSeleccionada &&
      tareas.find((x) => x.completado === true && x.id === tareaSeleccionada)
    ) {
      setTareaSeleccionada(null);
    }
    dispatch(deleteCompletados());
  };

  const tomarTabla = () => {
    dispatch(obtenerTareas());
  };

  const filtrarNoCompletados = () => {
    dispatch(filtrarTareasNoCompletadas());
  };

  const filtrarCompletados = () => {
    dispatch(filtrarTareasCompletadas());
  };

  return (
    <div className="mt-2">
      <Todos
        tareas={tareas}
        insertarTodo={insertarTodo}
        deleteTarea={deleteTarea}
        checkearTarea={checkearTarea}
        eliminarCompletados={eliminarCompletados}
        filtrarNoCompletados={filtrarNoCompletados}
        tomarTabla={tomarTabla}
        filtrarCompletados={filtrarCompletados}
      />
    </div>
  );
}

export default Casa;
