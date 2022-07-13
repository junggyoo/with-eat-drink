import styled from "styled-components";

interface IconButtonProps {
  icon: React.ReactNode;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  onClick?: () => void;
}

export default function IconButton({
  icon,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  onClick,
}: IconButtonProps) {
  return (
    <IconButtonWrapper
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      onClick={onClick}
    >
      {icon}
    </IconButtonWrapper>
  );
}

const IconButtonWrapper = styled.button<Omit<IconButtonProps, "icon">>`
  margin-top: ${({ marginTop }) => marginTop};
  margin-right: ${({ marginRight }) => marginRight};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  background-color: #fff;
`;
