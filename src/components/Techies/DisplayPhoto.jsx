//importing from styled component
import styled from "styled-components";

const ImageControl = styled.div`
  & {
    width: ${({ width }) => width || "9em"};
    height: ${({ height }) => height || "9em"};
    border-radius: 50%;
    border: 0.5px solid #10328c;
    position: relative;
    cursor: pointer;
  }

  & > p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    display: none;
  }
  & > img {
    border-radius: 50%;
    width: 100%;
    position: relative;
    z-index: 0;
    filter: none;
    transition: filter 0.2s;
  }

  &:hover img {
    filter: blur(5px);
    z-index: 2;
    opacity: 0.4;
    background-color: ${({ backgroundColor }) => backgroundColor || "none"};
  }

  &:hover p {
    display: block;
  }
`;

const DisplayPhoto = ({ img, alt, width, backgroundColor, currentStatus }) => {
  return (
    <ImageControl className="h-24  w-24 ">
      {currentStatus && (
        <div className=" absolute rounded-full right-2 top-3 border-2 border-white border-solid bg-[#1ED70E] h-[20px] w-[20px] z-[4]"></div>
      )}
      <img
        src={img}
        alt={alt}
        width={width}
        backgroundColor={backgroundColor}
      />
      <p>View Profile</p>
    </ImageControl>
  );
};

export default DisplayPhoto;
