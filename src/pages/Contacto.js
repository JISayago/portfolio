import React,{useState} from 'react';
import EmailForm from '../components/EmailForm';
import Sending from '../components/Sending';

function Contacto() {
  const [sending, setSending] = useState(false);

  const renderSending = () => {
    setSending(true);
  }
  const renderEmail = () => {
    setSending(false);
  }

  return (

    !sending ? (<EmailForm
      renderSending={renderSending} 
      renderEmail={renderEmail}
      />) : (<Sending />)
  )
}
export default Contacto;