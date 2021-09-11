import React, { useEffect } from "react";
import Formulario from "./Formulario";
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

function Comentarios({ tareaSeleccionada }) {
  const dispatch = useDispatch();

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
        todoId: tareaSeleccionada,
        texto: values.titulo,
      };
      dispatch(insertarComentario(params));
      formik.resetForm();
    },
  });

  useEffect(() => {
    if (tareaSeleccionada !== null) {
      dispatch(obtenerComentarios(tareaSeleccionada));
    }
  }, [tareaSeleccionada, dispatch]);

  return (
    <div className="sliderMenu bg-gray border-right">
      {tareaSeleccionada === null ? (
        <div className="noComments h-100">
          <h6 className="text-center">
            Presiona el botón de comentarios de una tarea para gestionarlos
          </h6>
        </div>
      ) : (
        <React.Fragment>
          <h5>
            Comentarios de la tarea <strong>"{tarea?.titulo}"</strong>
          </h5>
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
      )}
    </div>
  );
}

export default Comentarios;
