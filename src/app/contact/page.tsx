'use client'
import Footer from '@/components/homePage/footer';
import Navbar from '@/components/homePage/navbar';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {ApiResponse, ContactRequest} from '@/interfaces/interfaces';
import { useState } from 'react';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { TextField, Button, CircularProgress } from '@mui/material';

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
    <div className={'flex flex-col justify-between h-full'}>
        <div>
            <Navbar props={6} />
            <div className="flex flex-col justify-around items-center">``
                <Formik initialValues={initialValues} validationSchema={validator} onSubmit={submit}>
                {({ values, isValid, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                    <Form onSubmit={handleSubmit}>
                        <section 
                    //   className={`${styles.sectionsContainer}`}
                    >
                        <TextField
                        fullWidth name="name"
                        label="Name" variant="outlined"
                        value={values.name} onChange={handleChange}
                        onBlur={handleBlur} error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name} disabled={isLoading}
                        />
                    </section>
                    <section 
                    //   className={`${styles.sectionsContainer}`}
                    >
                        <TextField
                        fullWidth
                        name="email"
                        label="Email"
                        variant="outlined"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        disabled={isLoading}
                        />
                    </section>
                    <section 
                    //   className={`${styles.sectionsContainer}`}
                    >
                        <TextField
                        fullWidth
                        name="question"
                        label="Question"
                        variant="outlined"
                        multiline
                        rows={10}
                        value={values.question}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.question && Boolean(errors.question)}
                        helperText={touched.question && errors.question}
                        disabled={isLoading}
                        />
                    </section>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={!isValid || isLoading}
                        fullWidth
                        // sx={{ mt: 2 }}
                    >
                        {isLoading ? <CircularProgress size={24} /> : 'Submit'}
                    </Button>
                    </Form>
                )}
                </Formik>
            </div>
        </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
