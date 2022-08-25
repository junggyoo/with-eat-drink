import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  type?: "reset" | "submit" | "button";
  status?: "primary" | "text";
  width?: string;
  height?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  fontSize?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  type = "button",
  status = "primary",
  width = "100%",
  height = "44px",
  fontSize = "16px",
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  onClick,
}: ButtonProps) {
  return (
    <>
      <ButtonWrapper
        type={type}
        status={status}
        width={width}
        height={height}
        marginTop={marginTop}
        marginRight={marginRight}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        fontSize={fontSize}
        onClick={onClick}
      >
        {children}
      </ButtonWrapper>
    </>
  );
}

const ButtonWrapper = styled.button<Omit<ButtonProps, "children">>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  margin-top: ${({ marginTop }) => marginTop};
  margin-right: ${({ marginRight }) => marginRight};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};

  background-color: ${({ status }) => {
    switch (status) {
      case "primary":
        return "#8e75e2";
      case "text":
      default:
        return "#fff";
    }
  }};

  color: ${({ status }) => {
    switch (status) {
      case "primary":
        return "#fff";
      case "text":
      default:
        return "#8e75e2";
    }
  }};

  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;

  border-radius: 22px;
`;
