import * as Yup from 'yup';
import React from "react";
import {toast} from 'react-toastify';
import {Formik,Field,Form} from "formik";
import {useRouter} from "next/router";
import {useState} from "react";
import {Icon} from "@iconify/react";

interface FormValues {
    email: string,
    password: string,
    confirmPassword: string,
}
interface ApiResponse {
    success: boolean,
    data:unknown,
    timeStamp:Date
}
export default function RegisterComponent (){
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);
        const initialValue:FormValues= {
            email:'',
            password:'',
            confirmPassword: ''
        }
        const validationSchema = Yup.object({
            email: Yup.string()
                .email('Invalid Email')
                .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format')
                .required('Email is Required'),
            password: Yup.string()
                .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[,/;!#@%^*&(){}~`])/,
                    'Password must contain letters, numbers, and special characters')
                .min(8, 'Password must be at least 8 characters long')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'),undefined], 'Passwords must match')
                .required('Confirm password is required'),
        })

       const handleSubmit= async (values: FormValues)=>{
            console.log(values);
            const baseUrl:string = `https://localhost/3001`;
            const url:string = `${baseUrl}/api/v1/auth/register`
            let data: ApiResponse;
            try{
                setLoading(true);
                const response  = await fetch(`${url}`,{
                    method: 'POST',
                    body:JSON.stringify(values)
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
                    await router.push('/home')
                }
                else{
                    throw new Error('Something went wrong');
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
                }else{
                    toast.error(`Something went wrong`,{
                        theme: 'dark',
                        position: 'top-right',
                        autoClose: 5000,
                        progress:undefined,
                        pauseOnHover:true
                    })
                }

            }
            finally {
                setLoading(false);
            }
        }
        return (
            <div className={`flex justify-center items-center border-2 border-black `}>
                <p>Baggy Store</p>
                <Formik initialValues={initialValue} validationSchema={validationSchema}
                        onSubmit={handleSubmit}>
                    {({errors, touched, values, isValid, handleSubmit}) => (
                        <Form onSubmit={() => {
                            if (isValid) {
                                handleSubmit()
                            }
                        }}>
                            <section>
                                <p>Email</p>
                                <Field errors={errors.email} name="email" type={'text'} values={values.email}
                                       style={{borderColor: errors.email && touched.email ? 'red' : 'inherit'}}
                                />
                                {errors.email && (<p className={"text-xs"}>{errors.email}</p>)}
                            </section>
                            <section>
                                <p>Password</p>
                                <Field errors={errors.password} name="password" type={'password'}
                                       values={values.password}
                                       style={{borderColor: errors.password && touched.password ? 'red' : 'inherit'}}
                                />
                                {errors.password && (<p className={"text-xs"}>{errors.password}</p>)}
                            </section>
                            <section>
                                <p>ConfirmPassword</p>
                                <Field errors={errors.confirmPassword} values={values.confirmPassword}
                                       name="confirmPassword" type={'password'}
                                       style={{borderColor: errors.confirmPassword && touched.confirmPassword ? 'red' : 'inherit'}}
                                />
                                {errors.confirmPassword && (<p className={"text-xs"}>{errors.confirmPassword}</p>)}
                            </section>
                            <button type="submit" disabled={isLoading} className={'flex justify-center items-center'}>
                                {isLoading ? <Icon icon="line-md:loading-loop" width="24" height="24"/> : "Submit"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
}
