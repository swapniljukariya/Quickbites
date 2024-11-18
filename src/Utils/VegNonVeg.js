import React from "react";
import vegicon from '.././Components/img/veg-icon.png';
import nonvegicon from '.././Components/img/non-veg-icon.png';


const VegNonVeg = ({ itemAttribute }) => {

  const vegClassifierValue = itemAttribute && itemAttribute.vegClassifier;
  return (
    <div>
      {vegClassifierValue === "VEG" ? (
        <img src={vegicon} className="w-6 h-6" alt="veg food" />
      ) : (
        <img src={nonvegicon} className="w-6 h-6" alt="nonVeg food" />
      )}
    </div>
  );
};

export default  VegNonVeg;