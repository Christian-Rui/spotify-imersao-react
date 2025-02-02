import React from "react";

const ArrowButton = ({classDir, imgSrc, altDir}) => (
    <button className={`arrow-${classDir}`}>
        <img src={imgSrc} alt={`Seta ${altDir}`} />
    </button>
);

export default ArrowButton;