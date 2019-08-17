import React from "react";
import propTypes from "prop-types";

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

//TechItem.defaultProps = {
//tech: "Sem definição"
//};

//TechItem.propTypes = {
//tech: propTypes.string,
//onDelete: propTypes.func.isRequired // Especifica obrigatoriedade dos componentes
//};

export default TechItem;
