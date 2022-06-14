import Link from "next/link";
import styled from "styled-components";

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

export default function StyledLink({ children, href }: LinkProps ) {
  return (
    <Link href={href}>
      <StyledA>{children}</StyledA>
    </Link>
  )
}

const StyledA = styled.a`
  text-decoration: none;
  color: #8e75e2;
`

