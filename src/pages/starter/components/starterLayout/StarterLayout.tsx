import styled from "styled-components";
import router from "next/router";
import { IconButton, NavHeader } from "src/components";
import Close from "public/icons/close.svg";
import { useResetRecoilState } from "recoil";
import { starterState } from "src/states/starter";

interface StarterLayoutWrapperProps {
  title?: string;
  leftNav?: React.ReactNode;
  children: React.ReactNode;
}

export default function StarterLayout({
  title = "시작하기",
  leftNav,
  children,
}: StarterLayoutWrapperProps) {
  const resetState = useResetRecoilState(starterState);
  const handleCloseButtonClick = () => {
    resetState();
    router.push("/");
  };
  return (
    <StarterLayoutWrapper>
      <NavHeader
        title={title}
        leftNav={leftNav}
        rightNav={
          <IconButton icon={<Close />} onClick={handleCloseButtonClick} />
        }
      />
      <StarterContainer>{children}</StarterContainer>
    </StarterLayoutWrapper>
  );
}

const StarterLayoutWrapper = styled.main`
  height: 100%;
`;

const StarterContainer = styled.div`
  height: 100%;
  padding: 16px;
`;
