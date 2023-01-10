import React, { useRef, useState } from 'react';

import { SecondaryBtn, Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import {Textarea, Row, HeaderThree, Input, Box, Boxes, BoxNum, BoxText, SubmitBtn, SingleRow } from './AcomplishmentsStyles';
import emailjs from '@emailjs/browser';
import DisabledArea from './DisabledArea';



export default function Acomplishments  () {
  const form = useRef();
  const [status, setStatus] = useState({
    status:'',
    msgHeader:'',
    msgDesc: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(prev => ({...prev, status:'sending', msgHeader:'Sending message', msgDesc:'please wait a moment'}))
    
    emailjs.sendForm('service_n3wt3h4', 'template_7nefh28', form.current, 'YZuK_3s58-_88og6c')
      .then((result) => {
        setStatus(prev => ({...prev, status:'success', msgHeader:'Message sent successfully', msgDesc:'Thanks for reaching out!'}))
          console.log(result.text);
      }, (error) => {
        setStatus(prev => ({...prev, status:'error', msgHeader:'Something went wrong', msgDesc:'please try again later'}))
          console.log(error.text);
      });
  };
    return <Section id='contact'>
    <DisabledArea status={status}/>
    <SectionDivider/>
    <br/>
    <SectionTitle>Get in Touch</SectionTitle>
    <form ref={form} onSubmit={sendEmail} name=''>
    <Row>
      <HeaderThree>Full Name</HeaderThree>
      <Input name='user_name' type={'text'} placeholder='John Doe'/>
    </Row>
    <Row>
      <HeaderThree>Email</HeaderThree>
      <Input name='user_email' type={'text'} placeholder='johndoe@example.com'/>
    </Row>
    <Row>
      <HeaderThree>Subject</HeaderThree>
      <Textarea name='message' rows='6' placeholder='Type your message...'></Textarea>
    </Row>
    <SingleRow>
      <SubmitBtn type='submit'>Submit</SubmitBtn>
    </SingleRow>

    </form>
  </Section>
    
};

