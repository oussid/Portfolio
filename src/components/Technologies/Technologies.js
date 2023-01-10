import React from 'react';
import { DiLaravel, DiReact, DiWordpress, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section  id='technologies'>
    <br/>
    <SectionDivider />
    <br/>
    <SectionTitle >Technologies</SectionTitle>
    <SectionText >
      I've worked with a range of technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={'4rem'}/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            ReactJs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiLaravel size={'4rem'}/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Laravel & MySql databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiWordpress size={'4rem'}/>
        <ListContainer>
          <ListTitle>Content Management Systems</ListTitle>
          <ListParagraph>
            Experience with <br/>
            WordPress
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
