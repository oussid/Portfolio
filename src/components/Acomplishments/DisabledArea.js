import React, { useEffect, useState } from 'react'
import { AiOutlineSmile } from 'react-icons/ai'
import { HiOutlineEmojiSad } from 'react-icons/hi'
import { DisabledContainer, Header, MessageBox } from './DisabledAreaStyles'
import Loader from './Loader'


export default function DisabledArea(props) {
    const [display, setDisplay] = useState('none')
    
    useEffect(()=>{
        if(props.status.status === 'sending'){
            setDisplay('flex')
        }
        else if(props.status.status === 'success' || props.status.status === 'error'){
            setDisplay('flex')
            setTimeout(() => {
                setDisplay('none') 
            }, 3000);
        }
    }, [props.status])
    

  return (
    <DisabledContainer style={{display: display}}>
        <MessageBox>
        {/* Sending message */}
        {props.status.status === 'sending' && <Loader />}
        {/* message sent successfully  */}
        {props.status.status === 'success' && <AiOutlineSmile size={'6rem'} />}
        {/* message sent successfully  */}
        {props.status.status === 'error' && <HiOutlineEmojiSad size={'6rem'} />}
        
        <Header>{props.status.msgHeader}</Header>
        <p>{props.status.msgDesc}</p>
        </MessageBox>
    </DisabledContainer>
  )
}
