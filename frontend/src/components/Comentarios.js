import React, { useEffect } from "react";
import Formulario from "./Formulario";
import GoBackButtonListHeader from "./GoBackButtonListHeader";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";
import { Badge } from "react-bootstrap";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { obtenerComentarios, insertarComentario } from "../redux/todoActions";

function Comentarios({ match }) {
  const dispatch = useDispatch();
  const todoId = match.params.todoId;

  // Comentarios Selector
  const { tarea, comentarios } = useSelector((state) => state.todo);

  const initialValues = { titulo: "" };

  const validationSchema = yup.object({
    titulo: yup.string().trim().required("El texto es obligatorio"),
  });

  // Form with the initials values of the user
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const params = {
        todoId: todoId,
        texto: values.titulo,
      };
      dispatch(insertarComentario(params));
      formik.resetForm();
    },
  });

  useEffect(() => {
    if (todoId !== null) {
      dispatch(obtenerComentarios(todoId));
    }
  }, [todoId, dispatch]);

  return (
    <div className="ml-2 mr-2 sliderMenu bg-gray border-right">
      <React.Fragment>
        <div className="row">
          <div className="col-md-4 mb-2">
            <GoBackButtonListHeader title={`Volver al Listado`} link={`/`} />
          </div>
          <div className="col-md-8">
            <h5>
              Comentarios de la tarea <strong>"{tarea?.titulo}"</strong>
            </h5>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            {/* Formulario */}
            <Formulario formik={formik} type={"Comentario"} />
          </div>
          <div className="card-body">
            {/* Comentarios */}
            <List>
              {comentarios.map((value, index) => {
                return (
                  <React.Fragment key={value.id}>
                    <ListItem role={undefined} dense button>
                      <ListItemIcon>
                        <Badge variant="primary">{index + 1}</Badge>
                      </ListItemIcon>
                      <ListItemText primary={`${value.texto}`} />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                );
              })}
            </List>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default Comentarios;
