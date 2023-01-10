import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href={'/'}>
        <a style={{display:'flex', alignItems:'center', color:'#fff', marginBottom:'20px'}}>
          <DiCssdeck size={'3rem'}/> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href={'#projects'}>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href={'#technologies'}>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href={'#about'}>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href={'#contact'}>
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href='https://www.github.com/oussid' target={"_blank"}>
        <AiFillGithub size={'3rem'}></AiFillGithub>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com' target={"_blank"}>
        <AiFillLinkedin size={'3rem'}></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href='https://www.twitter.com/@oussama_idsaid' target={"_blank"}>
        <AiFillTwitterCircle size={'3rem'}></AiFillTwitterCircle>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
