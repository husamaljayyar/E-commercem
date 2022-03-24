import { CustomeButton } from "./Button.Styles";

const Button = ({
  text,
  onClick = () => {},
  isGray,
  width,
  height,
  radius,
  style = {},
  isLoading,
  isorange,
  link = {},
}) => {
  return ( 
    <CustomeButton
      to={link}
      as={link ? null : "button"}
      disabled={isLoading}

      onClick={onClick}
      isgray={isGray}
      radius={radius}
      style={style}
      width={width}
      height={height}
      isorange={isorange}
    >
      {text}
    </CustomeButton>
  );
};

export default Button;
