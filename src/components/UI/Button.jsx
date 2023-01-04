const Button = ({
  backgroundColor,
  children,
  width,
  height,
  hoverColor,
  color,
  type,
}) => {
  return (
    <button
      className={`p-[1em] w-[${width}] h-[${
        height ? height : "3em"
      }]flex items-center justify-center bg-[${
        backgroundColor ? backgroundColor : "#102d8c"
      }] hover:bg-[${hoverColor ? hoverColor : "#090e47"}] rounded-md text-${
        color ? color : "white"
      } hover:bg-[#090e47]`}
      type={type && type}
    >
      {children}
    </button>
  );
};

export default Button;
