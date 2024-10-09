import Footer from '@/components/homePage/footer';
import Navbar from '@/components/homePage/navbar';
import {Form, Formik ,Field} from 'formik';
import * as Yup from 'yup';
import {ContactRequest} from '@/interfaces/interfaces';

export default function Contact(){
    const initialValues : ContactRequest = {
        name:'',
        email:'',
        question:''
    }
    const validator = Yup.object({
        email: Yup.string()
            .email('Invalid Email')
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'valid mail Required')
            .required('required'),
        name: Yup.string()
            .matches(/^[a-zA-Z]{2,}/,
                'valid name required')
            .required('Required'),
        question: Yup.string()
        .matches(/^[a-zA-Z]{2,}/)
        .required('Required')
    })
    const submit= async (data: ContactRequest) =>{
        try{}
        catch(error:any){

        }
    }
    return (
        <div>
            <Navbar props={6}/>
            <div className='flex flex-col md:flex-row md:justify-around md:items-center '>
                <Formik initialValues={initialValues} validationSchema={validator} onSubmit={submit}>
                    <Form>
                    </Form>
                </Formik>
                <div>

                </div>
            </div>
            <Footer/>

        </div>
    )
}