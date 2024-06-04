
import { Form, Input, Button, Spin } from 'antd';
import { createUserWithEmailAndPassword, deleteUser, sendEmailVerification, signOut } from 'firebase/auth';
import { auth, db } from '../../App';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { ContextConsumer } from '../../Context/IpCon/ContextConsumer';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';





export const SignUp = ()=>{
    const {dispatch} = AuthContext();
    const {addy} = ContextConsumer();
    const [disable, setDisable]= useState(false);
    const [message, setMessage]= useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    
    const signUp = async (values)=>{
        setDisable(true);
        const {email, password} = values;
        if(location.pathname === process.env.REACT_APP_restrictedRoute){
                    alert('error cannnot create account')
                    setDisable(false)
                    navigate('/ejuandy');
                    return
        }
        try{
            const cred = await createUserWithEmailAndPassword(auth, email, password);

            //add user to users
            const userRef = collection(db, 'Users');
            await addDoc(userRef, {
                email:cred.user.email,
                userId:cred.user.uid
            }); console.log('user created')
            //send email verification
            await sendEmailVerification(cred.user);
                    console.log('email verification sent');
            
                    dispatch({type:'AUTH', payload:cred.user});
        }catch(error){
            console.log('sign up error', error)
        }finally{
            setDisable(false);
        }
           
    }
    return(
        <div>
            
            {
                disable ? <Spin size='large' className='isLoading' />:
           <>
            <h1>regsitration needed to apply for loan</h1>
            <Form labelCol={{span:5}} wrapperCol={{span:14}} onFinish={signUp}>
                <Form.Item
                    name={'email'}
                    label={'Email'}
                    rules={[
                        {
                            required:true,
                            message:'put in email'
                        },
                        {
                            type:'email',
                            message:'put in a valid email address'
                        }
                    ]}
                 >
                    <Input type="email" placeholder="email" />
                </Form.Item>
                
                <Form.Item
                    name={'password'}
                    label={'password'}
                    
                    rules={[
                        {
                            required:true,
                            message:'please put in your password'

                        }
                    ]}
                >

                    <Input.Password placeholder="put in password"/>

                </Form.Item>

                <Form.Item>
                    <Button disabled={disable} type='primary' htmlType='submit' >submit</Button>
                </Form.Item>

            </Form>
            {location.pathname !== process.env.REACT_APP_restrictedRoute && <div>or<NavLink  to ='/ejuandy/logIn'>login</NavLink></div>}
            {message && <div>{message}</div>}
            <button className='btn' onClick={()=>{navigate('/ejuandy')}} >go back to homePage</button>
            </>
        }
        </div>
    )
}