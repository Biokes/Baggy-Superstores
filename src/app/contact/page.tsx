'use client'
import Footer from '@/components/homePage/footer';
import Navbar from '@/components/homePage/navbar';
import {Form, Formik ,Field} from 'formik';
import * as Yup from 'yup';
import {ContactRequest} from '@/interfaces/interfaces';
import { useState } from 'react';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import styles from '@/styles/index.module.css';

// export default function Contact(){
//     const [isLoading, setIsLoading]= useState<boolean>(false);
//     const initialValues : ContactRequest = {
//         name:'',
//         email:'',
//         question:''
//     }
//     const validator = Yup.object({
//         email: Yup.string()
//             .email('Invalid Email')
//             .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'valid mail Required')
//             .required('required'),
//         name: Yup.string()
//             .matches(/^[a-zA-Z]{2,}/,
//                 'valid name required')
//             .required('Required'),
//         question: Yup.string()
//         .matches(/^[a-zA-Z]{2,}/)
//         .required('Required')
//     })
//     const submit= async (data: ContactRequest) =>{
//         try{}
//         catch(error:any){
//             if(error instanceof Error){
//                 console.error(error.message);
//                 console.error(error.stack);
//                 toast.error(`${error.message}`,{
//                     theme: 'dark',
//                     position: 'top-right',
//                     autoClose: 5000,
//                     progress:undefined,
//                     pauseOnHover:true
//                 })
//             }
//             else{
//                 toast.error(`Something went wrong`,{
//                     theme: 'dark',
//                     position: 'top-right',
//                     autoClose: false,
//                     progress:undefined,
//                     pauseOnHover:true
//                 })
//             }
//         }
//         finally{
//             setIsLoading(false);
//         }
//     }
//     return (
//         <div>
//             <Navbar props={6}/>
//             <div className='flex flex-col md:flex-row md:justify-around md:items-center '>
//                 <Formik initialValues={initialValues} validationSchema={validator} onSubmit={submit}>
//                    { ({values,isValid,errors,touched, handleSubmit})=>
//                    ( <Form>
//                         <section className={`${styles.sectionsContainer}`}>
//                             <Field errors={errors.name} name="name" type={'text'} values={values.name}
//                                     placeholder={'Name'}
//                                     style={{borderColor: errors.name || touched.name ? 'red' : 'inherit'}}
//                             />
//                             {errors.name && (<p className={"text-xs font-thin text-[#FF4040FF]"}>{errors.name}</p>)}
//                         </section>
//                         <section className={`${styles.sectionsContainer}`}>
//                             <Field errors={errors.email} name="email" type={'text'}
//                                     values={values.email} placeholder={'Email'}
//                                     style={{borderColor: errors.email || touched.email ? 'red' : 'inherit'}}
//                             />
//                             {errors.email && (
//                                 <p className={"text-xs font-thin text-red-500"}>{errors.email}</p>)}
//                         </section>
//                         <section className={`${styles.sectionsContainer}`}>
//                             <Field errors={errors.question} values={values.question}
//                                     name="question" type={'text'} as={'textarea'}
//                                     placeholder={'Question'} rows={10}
//                                     style={{borderColor: errors.question || touched.question ? 'red' : 'inherit'}}
//                             />
//                             {errors.question && (
//                                 <p className={"text-xs font-thin text-red-500"}>{errors.question}</p>)}
//                         </section>
//                     </Form>)}
//                 </Formik>
//                 <div>

//                 </div>
//             </div>
//             <Footer/>
//         <ToastContainer/>
//         </div>
//     )
// }

// 'use client'
// import Footer from '@/components/homePage/footer';
// import Navbar from '@/components/homePage/navbar';
// import { Form, Formik, Field } from 'formik';
// import * as Yup from 'yup';
// import { ContactRequest } from '@/interfaces/interfaces';
// import { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import styles from '@/styles/index.module.css';
// Import Material-UI components
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
    } catch (error: any) {
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
