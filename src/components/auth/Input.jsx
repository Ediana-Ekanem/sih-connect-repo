import React from "react";

const Input = React.forwardRef(({ placeholder, type, children }, ref) => {
  return (
    <div className="flex flex-col gap-[.5em] w-[100%] xl2:w-[45%] ">
      <label className="text-[#1e1e1e] font-[500] text-[1.1em] ">
        {children}
      </label>
      <input
        className="w-full h-[3em] rounded-md  border-gray-300 p-[.5em] bg-[#F6F8FE]  text-[#1e1e1e] "
        type={type ? type : "text"}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
});

export default Input;
