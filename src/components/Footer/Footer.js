import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';


import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
       <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel:+212682359060'>+212 604-634112</LinkItem>
       </LinkColumn> 
       <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='mailto:contact@idsaid.com'>contact@idsaid.com</LinkItem>
       </LinkColumn> 
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Bringing your vision to life online.</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/oussid' target={'_blank'}>
        <AiFillGithub size={'3rem'}></AiFillGithub>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com' target={'_blank'}>
        <AiFillLinkedin size={'3rem'}></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href='https://www.twitter.com/@oussama_idsaid' target={'_blank'}>
        <AiFillTwitterCircle size={'3rem'}></AiFillTwitterCircle>
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
   );
};

export default Footer;
