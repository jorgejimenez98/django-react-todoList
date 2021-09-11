import React from "react";
import { Col, Row } from "react-bootstrap";
import { ArrowRight } from "@material-ui/icons";
import { Button, TextField, Grid } from "@material-ui/core";

function Formulario({ formik, type }) {
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Row>
          <Col md={12}>
            <Grid container alignItems="flex-end">
              <Grid item md={1}>
                <ArrowRight />
              </Grid>
              <Grid item md={11}>
                <TextField
                  label={
                    type === "Todo"
                      ? "Inserte una Tarea"
                      : "Inserte un Comentario"
                  }
                  error={Boolean(formik.errors.titulo)}
                  id="titulo"
                  name="titulo"
                  size="medium"
                  value={formik.values.titulo}
                  fullWidth
                  onChange={formik.handleChange}
                />
                {Boolean(formik.errors.titulo) && (
                  <small className="text-red">{formik.errors.titulo}</small>
                )}
              </Grid>
            </Grid>
          </Col>
          <Button type="submit" style={{ display: "none" }}></Button>
        </Row>
      </form>
    </div>
  );
}

export default Formulario;
