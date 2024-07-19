import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillBehanceSquare } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import { Container, Div1, Div2, Div3, Span, NavLink, SocialIcons } from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/" style={{ display: "flex", alignItems: "center", color: "white" }}>
        <DiCssdeck size="3rem" />
        <Span style={{ marginLeft: "5px" }}>Portfolio</Span>
      </Link>
    </Div1>

    <Div2 style={{ marginTop: "10px" }}>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com/Smart-Star">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/foluso-ojutalayo/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/mofoluwasho_layo/">
        <AiFillBehanceSquare size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);
export default Header;
