'use client'
import {Formik, Field, Form } from 'formik';
import * as Yup from "yup";
import React, {useState} from "react";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import styles from "@/styles/index.module.css";
import {Icon} from "@iconify/react";
import Link from 'next/link'

interface LoginForm {
    email:string,
    password:string
}

export default function Page(){
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();
    const validator= Yup.object().shape({
        email: Yup.string()
            .email('Invalid Email')
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'valid mail Required')
            .required('required'),
        password: Yup.string()
            .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[,/;!#@%^*&(){}~`])/,
                'letters, numbers, special characters')
            .min(8, 'Password must be at least 8 characters long')
            .required('required')
    })
    const handleSubmit = async (values: LoginForm)=>{
        try{
            setLoading(true);
            let response = await fetch(`http://localhost:8000/api/v1/bagStore/auth/login`,
                {
                    method:'POST',
                    headers:{'content-type': 'application/json'},
                    body:JSON.stringify({
                        email:values.email,
                        password:values.password
                    })
                })
            response = await response.json();
            console.log(response);
            toast.success(`Registration Successful`,{
                theme: 'dark',
                position: 'top-right',
                autoClose: 5000,
                progress:undefined,
                pauseOnHover:true
            })
            await router.push('/home');

        }catch(error){
            if(error instanceof Error){
                console.log("Error message :", error.message)
                console.log("stack trace :", error.stack)
            }
            toast.error(`Something went wrong`,{
                theme: 'dark',
                position: 'top-right',
                autoClose: 5000,
                progress:undefined,
                pauseOnHover:true
            })
        }
        finally{
            setLoading(false);
        }
    }
    return (
        <div>
            <Formik initialValues={{email:'',password:''}} validationSchema={validator}
                    onSubmit={handleSubmit}>
                {({errors, touched,
                      values, isValid, handleSubmit}) => (
                    <Form onSubmit={() => {
                        if (isValid) {
                            handleSubmit()
                        }
                    }}
                          className={`flex flex-col ${styles.sections} gap-2`}>
                        <section className={`${styles.sectionsContainer}`}>
                            <Field errors={errors.email} name="email" type={'text'} values={values.email} placeholder={'email'}
                                   style={{borderColor: errors.email && touched.email ? 'red' : 'inherit'}}/>
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
                        <div className={`justify-center items-center flex hover:bg-gray-600 bg-gray-400
                                 w-[120px] rounded-md`}>
                            {!isLoading ?
                                <button type="submit" disabled={isLoading}
                                        className={`flex justify-center items-center w-[80px]
                                                    'text-white font-semibold rounded-md text-white py-[6px]`}>
                                    Submit
                                </button>
                                :
                                <Icon icon="line-md:loading-loop" width={30} height={30}
                                      className={'py-[10px]'}/>
                            }
                        </div>
                        <Link className={'hover:underline hover:text-gray-600 text-gray-400 pt-[20px]'} href={'/auth/register'}>Register </Link>
                        <Link className={'hover:underline hover:text-gray-600 text-gray-400 pt-[5px]'} href={'/auth/otp'}>Forgotten Password</Link>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
