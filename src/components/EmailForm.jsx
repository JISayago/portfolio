import React from 'react';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function EmailForm({renderSending,renderEmail}) {
  const { register, formState: { errors }, handleSubmit } = useForm();
    const MySwal = withReactContent(Swal)
    const Toast = MySwal.mixin({
        toast: true,
        position: 'top-center',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    function renderCompEmail() {
        renderEmail();        
    }
  function onSubmit(data) {
      
        const { nombre, asunto, email, mensaje } = data;
        renderSending();
        setTimeout(function(){
            renderCompEmail();
        }, 2000);

      emailjs.init(process.env.REACT_APP_PUBLIC_KEY_EMAILJS);        
      emailjs.send(process.env.REACT_APP_SERVICE_EMAILJS, process.env.REACT_APP_TEMPLATE_EMAILJS, {
        to_email: 'juanignaciosayago@gmail.com',
        from_name: nombre,
        subject:asunto,
        message: mensaje,
        contact:email
      })
      .then((response) => {
          if (response.status === 200) {            
            Toast.fire({
                icon: 'success',
                title: 'Mensaje enviado correctamente.'
              })
          }         
      })
        .catch((error) => {
        console.log(error)
            Toast.fire({
                icon: 'warning',
                title: 'Hubo un error en el envio del mensaje. Intente nuevamente.'
            })
          }
      );
  } 
    return (
<div className='
      mbl:p-6 mbl:mt-10
      sml:p-14 sml:mt-10'>   
        <h1 className='text-white font-mono font-bold text-3xl mb-8'>Enviar mensaje nuevo</h1>
        <form className='w-full h-screen' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex h-full flex-col gap-y-4 
          mbl:justify-evenly
          sml:justify-between sml:gap-y-6'>
            <div className='flex w-full justify-between 
            mbl:flex-col mbl:mb-0
            sml:flex-row sml:mb-5'>
              <div className='
              mbl:w-full mbl:mb-3
              sml:w-1/2 sml:pr-3'>
              <input type="text"
                {...register("nombre", {
                  required: 'Por favor ingrese su nombre.',
                  maxLength: { value: 25, message: 'Ha excedido el máximo de 25 caracteres.' },
                  minLength: { value: 4, message: 'El mínimo son 4 caracteres.' }
                })}
                placeholder="Nombre..."
                  className="flex input border-transparent border-b-dark-orange bg-transparent text-smoke placeholder:text-smoke-b w-full focus:bg-smoke-a focus:border-b-dark-orange" />
                <small className="mt-1 flex text-danger-red font-bold">
                  {errors.nombre && errors.nombre.message}</small>
              </div>
              <div className='
              mbl:w-full
              sml:w-1/2 sml:pl-3'>
              <input type="text" {...register("asunto", {
                  required: 'Por favor ingrese un asunto.',
                  maxLength: { value: 25, message: 'Ha excedido el máximo de 25 caracteres.' },
                  minLength: { value: 10, message: 'El mínimo son 10 caracteres.' }
              })} placeholder="Asunto..." className="input border-transparent border-b-dark-orange bg-transparent text-smoke placeholder:text-smoke-b w-full focus:bg-smoke-a focus:border-b-dark-orange" />
                  <small className="mt-1 flex text-danger-red font-bold">
                  {errors.asunto && errors.asunto.message}</small>    
              </div>
            </div>
            <div className='
            mbl:mb-3
            sml:mb-5'>
                  <input type="email" {...register("email", {
                  required: 'Por favor ingrese su email de contacto.',
                  maxLength: { value: 50, message: 'Ha excedido el máximo de 50 caracteres.' },
                  minLength: { value: 12, message: 'El mínimo son 12 caracteres.' }
                  })}
                placeholder="Email de contacto..." className="input border-transparent border-b-dark-orange bg-transparent text-smoke placeholder:text-smoke-b w-full focus:bg-smoke-a focus:border-b-dark-orange" />
                <small className="mt-1 flex text-danger-red font-bold">
                  {errors.email && errors.email.message}</small>   
            </div>
                <div className='
                h-1/4 sml:h-1/4'>
                  <textarea {...register("mensaje", {
                  required: 'Por favor ingrese el mensaje que desea enviar.',
                  maxLength: { value: 250, message: 'Ha excedido el máximo de 250 caracteres.' },
                  minLength: { value: 15, message: 'El mínimo son 15 caracteres.' }
                })} placeholder="Contenido del mensaje..." className="textarea text-lg w-full h-full bg-transparent border-dark-orange text-smoke placeholder:text-smoke-b focus:bg-smoke-a focus:border-dark-orange"></textarea>      
                <small className="mt-1 flex text-danger-red font-bold">
                  {errors.mensaje && errors.mensaje.message}</small>   
            </div>
            <div className='flex justify-center 
                sml:mt-5 '>
                  <input type="submit" value="Enviar" className="btn w-1/4 border-dark-orange bg-transparent text-smoke hover:bg-transparent hover:border-dark-orange active:bg-dark-orange active:text-smoke activer:border-smoke transition ease-in-out hover:scale-110 hover:duration-150" />
                </div>
              </div>
            </form>
          </div>

  )
}
