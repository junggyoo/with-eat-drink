import type { ReactElement } from "react";
import styled from "styled-components";
import BottomNavBar from "../bottomNavBar";
import Header from "../header";

interface LayoutProps {
  children?: ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Contents>{children}</Contents>
      <BottomNavBar />
    </>
  );
}

const Contents = styled.main`
  height: 100%;
  margin-top: 51px;
`;
