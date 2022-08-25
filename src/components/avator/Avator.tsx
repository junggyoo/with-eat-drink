import styled from "styled-components"

interface AvatorProps {
  name?: string;
  width?: string;
  height?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  backgroundColor?: string;
  fontSize?: string;
}

export default function Avator({ 
  name, 
  width = '40px', 
  height = '40px', 
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  backgroundColor = '#5F76D5',
  fontSize = '16px',
  }: AvatorProps) {
  return (
    <AvatorWrapper
      width={width}
      height={height}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      backgroundColor={backgroundColor}
    >
      <Name fontSize={fontSize}>
        {name}
      </Name>
    </AvatorWrapper>
  )
}

const AvatorWrapper = styled.div<Omit<AvatorProps, 'name' | 'fontSize'>>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-top: ${({ marginTop }) => marginTop};
  margin-right: ${({ marginRight }) => marginRight};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 50%;
`

const Name = styled.span<Pick<AvatorProps, 'fontSize'>>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 300;
  color: #FFFFFF;
`