"use client"
import * as Yup from 'yup';
import React from "react";
import {toast, ToastContainer} from 'react-toastify';
import {Formik,Field,Form} from "formik";
import {useRouter} from "next/navigation";
import {useState} from "react";
import styles from '../index.module.css'
import {Icon} from "@iconify/react";
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux';
import {setUser } from '@/redux/userSlice';
import {FormValues, ApiResponse} from '@/interfaces/interfaces';


export default function RegisterComponent (){
    const router = useRouter();
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
        const initialValue:FormValues= {
            email:'',
            password:'',
            confirmPassword: ''
        }
        const validationSchema = Yup.object({
            email: Yup.string()
                .email('Invalid Email')
                .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'valid mail Required')
                .required('required'),
            password: Yup.string()
                .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[,/;!#@%^*&(){}~`])/,
                    'letters, numbers, special characters')
                .min(8, 'at least 8 characters long')
                .required('required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'),undefined], 'Passwords must match')
                .required('required'),
        })

       const handleSubmit= async (values: FormValues)=>{
            console.log(values);
            const url:string = 'http://localhost:8000/api/v1/bagStore/auth/register'
            let data: ApiResponse;
            try{
                setLoading(true);
                console.log('About to send data')
                console.log("email",values.email)
                console.log("password", values.password)
                const response  = await fetch(`${url}`,{
                    method: 'POST',
                    headers: {
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify({
                        email: values.email,
                        password: values.password
                    })
                })
                data = await response.json();
                console.log(data);
                if(data.success || response.ok){
                    toast.success(`Registration Successful`,{
                        theme: 'dark',
                        position: 'top-right',
                        autoClose: 5000,
                        progress:undefined,
                        pauseOnHover:true
                    })
                    let userId = 0;
                    if (typeof data.data === 'object' && 'id' in data.data) {
                        userId = data.data.id;
                    }
                    dispatch(setUser({
                        id:userId,
                        email: values.email,
                        password:values.password
                    }))
                    router.push('/home')
                }
                else {
                    const errorMessage = typeof data.data === 'string' ? data.data
                        : 'An unknown error occurred';
                    throw new Error(errorMessage);
                }

            }
            catch(error: unknown){
                if(error instanceof Error){
                    console.error(error.message);
                    console.error(error.stack);
                    toast.error(`${error.message}`,{
                        theme: 'dark',
                        position: 'top-right',
                        autoClose: 5000,
                        progress:undefined,
                        pauseOnHover:true
                    })
                }
                else{
                    toast.error(`Something went wrong`,{
                        theme: 'dark',
                        position: 'top-right',
                        autoClose: false,
                        progress:undefined,
                        pauseOnHover:true
                    })
                }
            }
            finally {
                setLoading(false);
            }
        }

        const RegisterForm =()=> {
            return (
                <div className={``}>
                    <Formik initialValues={initialValue} validationSchema={validationSchema}
                            onSubmit={handleSubmit}>
                        {({errors, touched, values, isValid, handleSubmit}) => (
                            <Form onSubmit={isValid ? handleSubmit: undefined}
                                  className={`flex flex-col ${styles.sections} gap-2`}>
                                <section className={`${styles.sectionsContainer}`}>
                                    <Field errors={errors.email} name="email" type={'text'} values={values.email}
                                           placeholder={'email'}
                                           style={{borderColor: errors.email && touched.email ? 'red' : 'inherit'}}
                                    />
                                    {errors.email && (<p className={"text-xs font-thin text-[#FF4040FF]"}>{errors.email}</p>)}
                                </section>
                                <section className={`${styles.sectionsContainer}`}>
                                    <Field errors={errors.password} name="password" type={'password'}
                                           values={values.password} placeholder={'password'}
                                           style={{borderColor: errors.password && touched.password ? 'red' : 'inherit'}}
                                    />
                                    {errors.password && (
                                        <p className={"text-xs font-thin text-red-500"}>{errors.password}</p>)}
                                </section>
                                <section className={`${styles.sectionsContainer}`}>
                                    <Field errors={errors.confirmPassword} values={values.confirmPassword}
                                           name="confirmPassword" type={'password'}
                                           placeholder={'Confirm password'}
                                           style={{borderColor: errors.confirmPassword && touched.confirmPassword ? 'red' : 'inherit'}}
                                    />
                                    {errors.confirmPassword && (
                                        <p className={"text-xs font-thin text-red-500"}>{errors.confirmPassword}</p>)}
                                </section>
                                <div className={`justify-center items-center flex hover:bg-gray-600 bg-gray-400
                                 w-[120px] rounded-md mt-[20px]`}>
                                    {!isLoading ?
                                        <button type="submit" disabled={isLoading}
                                                className={`flex justify-center items-center w-[80px]
                                                    'text-white font-semibold rounded-md text-white py-[6px]`}>
                                            Submit
                                        </button>
                                        :
                                        <Icon icon="line-md:loading-loop" width={40} height={40}
                                        className={'py-[10px]'}/>
                                    }
                                </div>
                                <p className={'hover:underline hover:text-gray-600 text-gray-400 pt-[20px]'}
                                onClick={()=>{router.push('/auth/login')}}>Already have An Account</p>
                                <p className={'hover:underline hover:text-gray-600 text-gray-400 pt-[5px]'}
                                   onClick={()=>{router.push('/auth/otp')}}>Forgotten Password</p>
                            </Form>
                        )}
                    </Formik>
                </div>
            )
        }
        return (
            <div className={'justify-center items-center flex flex-col ' +
                'md:border-2px md:border-[1px] md:border-black md:py-[20px] md:px-[10px] md:rounded-md'}>
                <p className={'font-semibold text-lg text-gray-600 md:text-2xl'}>Baggy Stores</p>
                <p className={'font-semibold text-lg text-gray-500 pb-[20px] md:text-2xl md:pt-[20px]'}>Register</p>
                <RegisterForm/>
                <ToastContainer/>
            </div>
        )
}
