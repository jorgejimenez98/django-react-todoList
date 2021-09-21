import React from "react";
import { Comment, Delete } from "@material-ui/icons";
import { LinkContainer } from "react-router-bootstrap";
import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
} from "@material-ui/core";

function TodoItem({
  handleToggle,
  labelId,
  value,
  deleteTarea,
}) {
  return (
    <React.Fragment>
      <ListItem
        role={undefined}
        dense
        button
        onClick={handleToggle(value.id, value.completado)}
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={value.completado}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText
          id={labelId}
          primary={`${value.titulo}`}
          className={value.completado ? "line" : ""}
        />
        <ListItemSecondaryAction>
          <LinkContainer to={`/todos/${value.id}/comentarios`}>
            <IconButton edge="end" aria-label="comments" className="mr-2">
              <Comment />
            </IconButton>
          </LinkContainer>
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={() => deleteTarea(value.id)}
          >
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </React.Fragment>
  );
}

export default TodoItem;
