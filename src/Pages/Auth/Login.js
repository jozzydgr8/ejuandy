
import { Form, Input, Button, Spin } from 'antd';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../App';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { ContextConsumer } from '../../Context/IpCon/ContextConsumer';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const Login = ()=>{
    const {dispatch} = AuthContext();
    const {addy} = ContextConsumer();
    const [message, setMessage] = useState(null)
    const [disable, setDisable] = useState(false);
    const signIn = (values)=>{
        setDisable(true)
        const {email, password} = values;
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential=>{
                localStorage.setItem('user',JSON.stringify(userCredential.user));
             dispatch({type:'AUTH', payload:userCredential.user});
             setDisable(false);
            }).catch(error=>{
                console.log('sign in error', error)
                setMessage('email or password in correct');
                setDisable(false)
            })
           
    }
    return(
        <div>
            

            {disable ? <Spin size='large' className='isLoading' />:
            <>
            {!addy && <h1>regsitration required for loan application</h1>}
            <Form labelCol={{span:5}} wrapperCol={{span:14}} onFinish={signIn}>
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
                    <Button type='primary' disabled={disable} htmlType='submit' >submit</Button>
                </Form.Item>

            </Form>

            </>

            }
            {!addy ? <div>or <NavLink to ='/ejuandy/signUp'>SignUp </NavLink></div>:null }
            {message && <p>{message}</p>}
        </div>
    )
}