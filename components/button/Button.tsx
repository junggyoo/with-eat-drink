import styled from "styled-components"

interface ButtonProps {
  children: React.ReactNode
  type?: 'reset' | 'submit' | "button"
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
  type = 'button', 
  width = '100%', 
  height = '44px', 
  fontSize = '16px', 
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  onClick, }: ButtonProps) {
  return (
    <>
      <ButtonWrapper
        type={type}
        width={width}
        height={height}
        marginTop={marginTop}
        marginRight={marginRight}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        fontSize={fontSize}
        onClick={onClick}>
        {children}
      </ButtonWrapper>
    </>
  )
}

const ButtonWrapper = styled.button<Omit<ButtonProps, 'children'>>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-top: ${({ marginTop }) => marginTop};
  margin-right: ${({ marginRight }) => marginRight};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  font-size: ${({ fontSize }) => fontSize};
  background-color: #8e75e2;
  color: #fff;
  border-radius: 22px;
`