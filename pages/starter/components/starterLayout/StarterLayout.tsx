import styled from "styled-components";
import router from "next/router";
import { IconButton, NavHeader } from "../../../../components";
import Close from "../../../../assets/icons/close.svg";

interface StarterLayoutWrapperProps {
  leftNav?: React.ReactNode;
  children: React.ReactNode;
}

export default function StarterLayout({
  leftNav,
  children,
}: StarterLayoutWrapperProps) {
  const handleCloseButtonClick = () => {
    router.push("/");
  };
  return (
    <StarterLayoutWrapper>
      <NavHeader
        title="시작하기"
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
