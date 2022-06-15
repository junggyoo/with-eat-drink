import styled from "styled-components"

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>
        위드잇드
      </Title>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  padding: 14px 0;
  text-align: center;
  border-bottom: 1px solid #000;
`

const Title = styled.h1`
  font-size: 18px;
`