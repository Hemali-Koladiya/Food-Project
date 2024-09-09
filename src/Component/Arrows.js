export const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-2 top-1/2  transform -translate-y-1/2 z-10 cursor-pointer bg-white bg-opacity-25 rounded-full w-8 h-8 flex justify-center items-center"
      onClick={onClick}
    >
      <span className="text-white"> &#x276F; </span>
    </div>
  );
};

export const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white bg-opacity-25 rounded-full w-8 h-8 flex justify-center items-center"
      onClick={onClick}
    >
      <span className="text-white"> &#x276E;</span>
    </div>
  );
};


export const NextArrows = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2  transform -translate-y-1/2 z-10 cursor-pointer bg-white  rounded-full w-7 h-7 flex justify-center items-center shadow-md"
      onClick={onClick}
      style={{right: "-25px"}}
    >
      <span className="text-black"> &#x2192; </span>
    </div>
  );
};

export const PrevArrows = ({ onClick }) => {
  return (
    <div
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white bg-opacity-25 rounded-full w-7 h-7 flex justify-center items-center  shadow-md"
      onClick={onClick}
      style={{left: "-25px"}}
    >
      <span className="text-black"> &#x2190; </span>
    </div>
  );
};
