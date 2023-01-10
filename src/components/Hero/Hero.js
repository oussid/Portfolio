import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Oussama Idsaid <br/>
        Full-Stack Web Developer
      </SectionTitle>
      <SectionText>
      As a web developer, I specialize in creating custom, effective, and beautiful websites that drive results and help businesses grow online.
      </SectionText>
      <Button onClick = {() => window.location= '#contact'}>Get in Touch</Button>
    </LeftSection>
  </Section>
);

export default Hero;