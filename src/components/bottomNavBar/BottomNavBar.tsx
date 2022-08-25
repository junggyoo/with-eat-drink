import styled from "styled-components";

const NAV_ITEMS = [
  {
    id: 1,
    name: "map",
    icon: null,
  },
  {
    id: 2,
    name: "home",
    icon: null,
  },
  {
    id: 3,
    name: "my",
    icon: null,
  },
];

export default function BottomNavBar() {
  return (
    <BottomNavBarWrapper>
      <NavContainer>
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.id}>{item.name}</NavItem>
        ))}
      </NavContainer>
    </BottomNavBarWrapper>
  );
}

const BottomNavBarWrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  padding-top: 11px;
  padding-bottom: 41px;
  background-color: white;
  border-top: 1px solid #000;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled.span`
  width: 20px;
  height: 20px; ;
`;
