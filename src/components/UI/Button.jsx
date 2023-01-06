//importing from style-components
import styled from "styled-components";

const ButtonControl = styled.button`
  & {
    height: ${({ height }) => (height ? height : "3em")};

    display: flex;
    justify-content: center;

    align-items: center;

    background-color: ${(props) => props.backgroundColor || "#10328C"};
    color: ${(props) => props.color || "#ffffff"};
    padding: 1em;
    width: ${(props) => props.width || "200px"};
    border-radius: 8px;
    margin: 1em;
    font-size: 1.2em;
    border: ${(props) => props.border || 0};
    cursor: pointer;
  }
  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || "#090e47"};
  }
`;
const Button = ({
  backgroundColor,
  children,
  width,
  height,
  hoverColor,
  color,
  type,
  border,
}) => {
  return (
    <ButtonControl
      type={type && type}
      backgroundColor={backgroundColor}
      height={height}
      border={border}
      color={color}
      hoverColor={hoverColor}
      width={width}
    >
      {children}
    </ButtonControl>
  );
};

export default Button;
