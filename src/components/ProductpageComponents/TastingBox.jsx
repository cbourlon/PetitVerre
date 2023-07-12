import React from "react";
import TastingboxComponent from "../TastingboxComponent";

function TastingBox({ tastingbox }) {
  return (
    <div>
      <TastingboxComponent tastingbox={tastingbox} />
    </div>
  );
}

export default TastingBox;
