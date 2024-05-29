import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import './whatsappChat.css';
import logo  from '../../images/ldcwhatlogo.jpg'

const Whatsappchat = () => {




  return (
    <div>
       <FloatingWhatsApp
       phoneNumber="+923412312325"
       accountName="LDC Lab"
       avatar={logo}
       chatMessage="how can help you sir   please write your name"
       allowEsc
       allowClickAway
       notification
       notificationSound
    />
    </div>
  )
}

export default Whatsappchat