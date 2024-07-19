import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillBehanceSquare } from "react-icons/ai";

import { SocialIcons } from "./FooterStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tell:+234-813-4540-483">+234-813-4540-483</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:ojutalayofoluso@gmail.com">ojutalayofoluso@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons href="https://github.com/Smart-Star" style={{ marginRight: "20px" }}>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/foluso-ojutalayo/"
            style={{ marginRight: "20px" }}>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/mofoluwasho_layo/">
            <AiFillBehanceSquare size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};
export default Footer;
