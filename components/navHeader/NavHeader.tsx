import styled from "styled-components";

export interface NavHeaderProps {
  title: string;
  leftNav?: React.ReactNode;
  rightNav?: React.ReactNode;
}

export default function NavHeader({
  title,
  leftNav,
  rightNav,
}: NavHeaderProps) {
  return (
    <NavHeaderWrapper>
      <LeftNav>{leftNav}</LeftNav>
      <Title>{title}</Title>
      <RightNav>{rightNav}</RightNav>
    </NavHeaderWrapper>
  );
}

const NavHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  background-color: white;
  text-align: center;
  border-bottom: 1px solid #000;
`;

const LeftNav = styled.span`
  min-width: 24px;
  margin-left: 5px;
`;

const RightNav = styled.span`
  min-width: 24px;
  margin-right: 15px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;
