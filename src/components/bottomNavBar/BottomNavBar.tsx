import styled from "styled-components";
import Map from "public/icons/map.svg";
import Create from "public/icons/create.svg";
import MyInfo from "public/icons/my-info.svg";
import Link from "next/link";

const NAV_ITEMS = [
  {
    id: 1,
    url: "/map",
    icon: <Map />,
  },
  {
    id: 2,
    url: "/create-party",
    icon: <Create />,
  },
  {
    id: 3,
    url: "my-info",
    icon: <MyInfo />,
  },
];

export default function BottomNavBar() {
  return (
    <BottomNavBarWrapper>
      <NavContainer>
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.id}>
            <Link href={item.url}>
              <a>{item.icon}</a>
            </Link>
          </NavItem>
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
