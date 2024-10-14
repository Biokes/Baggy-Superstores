'use client'
import Footer from '@/components/homePage/footer';
import Navbar from '@/components/homePage/navbar';
import {Form, Formik} from 'formik';
import MailIcon from '@mui/icons-material/mail'
import CallIcon from '@mui/icons-material/call'
import * as Yup from 'yup';
import {ApiResponse, ContactRequest} from '@/interfaces/interfaces';
import { useState } from 'react';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { TextField, Button, CircularProgress } from '@mui/material';
import styles from '@/styles/index.module.css'

export default function Contact() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const initialValues: ContactRequest = {
    name: '',
    email: '',
    question: ''
  };

  const validator = Yup.object({
    email: Yup.string()
      .email('Invalid Email')
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Valid mail required')
      .required('Required'),
    name: Yup.string()
      .matches(/^[a-zA-Z]{2,}/, 'Valid name required')
      .required('Required'),
    question: Yup.string()
      .matches(/^[a-zA-Z]{2,}/)
      .required('Required'),
  });

  const submit = async (data: ContactRequest) => {
    try {
      setIsLoading(true);
      const response: Response  = await fetch('/api/v1/recieveData',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
      const apiResponse:ApiResponse = await response.json();
      if(apiResponse.success){
        toast.success('Your question is successfully sent.')
      }
      
      
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        toast.error(`${error.message}`, {
          theme: 'dark',
          position: 'top-right',
          autoClose: 5000,
        });
      } else {
        toast.error('Something went wrong', {
          theme: 'dark',
          position: 'top-right',
          autoClose: false,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={'flex flex-col justify-between'}>
      <div className={styles.slideIn}>
        <Navbar props={6} />
        <p className={`${styles.bestSellers} my-[30px]`}>Contact us</p>
        <div className={styles.pack}>
          <div className="flex flex-col justify-around items-center shadow-md p-[30px]">
              <Formik initialValues={initialValues} validationSchema={validator} onSubmit={submit}>
              {({ values, isValid, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                  <Form onSubmit={handleSubmit}  className={styles.form}>
                      <section className={'my-[5px] flex flex-col gap-[10px] lg:gap-0'}>
                        <TextField
                        fullWidth name="name" sx={{width:{xs:'300px',sm:'350px',md:'400px'},height:{xs:'30px',sm:'40px',md:'60px'},marginBlock:'5px'}}
                        label="Name" variant="outlined"
                        value={values.name} onChange={handleChange}
                        onBlur={handleBlur} error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name} disabled={isLoading}
                        />
                    </section>
                    <section className={'my-[10px] flex flex-col gap-[10px]'}>
                        <TextField
                        fullWidth  sx={{width:{xs:'300px',sm:'350px',md:'400px'},height:{xs:'30px',sm:'40px',md:'60px'},marginBlock:'5px'}}
                        name="email" label="Email" variant="outlined"
                        value={values.email} onChange={handleChange} onBlur={handleBlur} 
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email} disabled={isLoading}
                        />
                  </section>
                    <section >
                      <TextField fullWidth
                      sx={{width:{xs:'300px',sm:'350px',md:'400px'}, marginBlock:'15px'}}
                      name="question" label="Question" variant="outlined" multiline
                      rows={5} value={values.question} onChange={handleChange}
                      onBlur={handleBlur} error={touched.question && Boolean(errors.question)}
                      helperText={touched.question && errors.question} disabled={isLoading}/>
                  </section>
                  <Button type="submit" variant="contained" 
                      color="primary" disabled={!isValid || isLoading} fullWidth
                      sx={{width:'20%',backgroundColor:'#00C75D'}}>
                      {isLoading ? <CircularProgress size={24} /> : 'Submit'}
                  </Button>
                  </Form>
              )}
              </Formik>
          </div>
          <div className={styles.contactPack}>
            <div className={styles.contact}>
              <CallIcon/>
              <p className={'text-lg'}>123 945 203 90</p>
              <p className={'text-lg'}>call us</p>
            </div>
            <div className={styles.contact}>
              <MailIcon/>
              <p className={'text-lg'}>mailer@email.com</p>
              <p className={'text-lg'}>Mail us</p>
            </div>
          </div>
        </div>
      </div> 
      <Footer />
      <ToastContainer />
    </div>
  );
}