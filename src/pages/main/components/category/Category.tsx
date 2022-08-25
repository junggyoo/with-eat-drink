import styled from "styled-components"

interface CategoryProps {
  children: string;
}

export default function Category({ children }: CategoryProps) {
  return (
    <CategoryWrapper>
      <Name>{children}</Name>
    </CategoryWrapper>
  )
}

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 24px;
  background-color: #D6CEF2;
  border-radius: 3px;
`

const Name = styled.span`
  font-size: 14px;
  color: #000;
`