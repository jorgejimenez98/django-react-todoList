import React from "react";
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { FaListUl, FaCheckDouble, MdNotInterested } from 'react-icons/all'
import { Delete } from '@material-ui/icons'

function FooterList({
    value,
    setValue,
    tomarTabla,
    filtrarCompletados,
    filtrarNoCompletados,
    eliminarCompletados
}) {
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        label="Todos"
        icon={<FaListUl size={20} />}
        onClick={tomarTabla}
      />
      <BottomNavigationAction
        label="Completados"
        onClick={filtrarCompletados}
        icon={<FaCheckDouble size={20} />}
      />
      <BottomNavigationAction
        label="No Completados"
        onClick={filtrarNoCompletados}
        icon={<MdNotInterested size={20} />}
      />
      <BottomNavigationAction
        label="Eliminar Completados"
        onClick={() => {
          setValue(0);
          eliminarCompletados();
        }}
        icon={<Delete size={20} />}
      />
    </BottomNavigation>
  );
}

export default FooterList;
