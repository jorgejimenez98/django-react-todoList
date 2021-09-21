import React from "react";
import { useDispatch } from "react-redux";
import Formulario from "./Formulario";
import FooterList from "./FooterList";
import TodoItem from "./TodoItem";
import { DELETE_TODO } from "../redux/totoConstants";
import { List } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";

function Todos({
  tareas,
  insertarTodo,
  deleteTarea,
  checkearTarea,
  eliminarCompletados,
  filtrarNoCompletados,
  tomarTabla,
  filtrarCompletados,
}) {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const initialValues = { titulo: "" };

  const validationSchema = yup.object({
    titulo: yup.string().trim().required("El texto es obligatorio"),
  });

  // Form with the initials values of the user
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      insertarTodo(values);
      formik.resetForm();
    },
  });

  const handleToggle = (todoId, completado) => () => {
    // CHECKEAR FILTRO DE TABLA
    if (value === 1 && completado) {
      dispatch({ type: DELETE_TODO, payload: { id: todoId } });
    } else if (value === 2 && !completado) {
      dispatch({ type: DELETE_TODO, payload: { id: todoId } });
    }
    checkearTarea(todoId);
  };

  return (
    <div className="ml-5 mr-5">
      <h5 className="text-center text-muted">
        Tareas Personales <small>{tareas.length}</small>
      </h5>
      {/* Formulario */}
      <Formulario formik={formik} type={"Todo"} />

      {/* Listado */}
      <List>
        {tareas.map((value) => {
          const labelId = `checkbox-list-label-${value.id}`;

          return (
            <TodoItem
              labelId={labelId}
              key={value.id}
              handleToggle={handleToggle}
              value={value}
              deleteTarea={deleteTarea}
            />
          );
        })}
      </List>

      {/* Footer */}
      <FooterList
        value={value}
        setValue={setValue}
        tomarTabla={tomarTabla}
        filtrarCompletados={filtrarCompletados}
        filtrarNoCompletados={filtrarNoCompletados}
        eliminarCompletados={eliminarCompletados}
      />
    </div>
  );
}

export default Todos;
