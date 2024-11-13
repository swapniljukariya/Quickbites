import React from "react";


const VegNonVeg = ({ itemAttribute }) => {

  const vegClassifierValue = itemAttribute && itemAttribute.vegClassifier;
  return (
    <div>
      {vegClassifierValue === "VEG" ? (
        <img src={null} className="w-6 h-6" alt="veg food" />
      ) : (
        <img src={null} className="w-6 h-6" alt="nonVeg food" />
      )}
    </div>
  );
};

export default  VegNonVeg;