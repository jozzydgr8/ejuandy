
import { Form, Input, Button } from 'antd';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../App';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { ContextConsumer } from '../../Context/IpCon/ContextConsumer';
import { NavLink } from 'react-router-dom';




export const SignUp = ()=>{
    const {dispatch} = AuthContext();
    const {addy} = ContextConsumer();
    const signUp = (values)=>{
        const {email, password} = values;
        createUserWithEmailAndPassword(auth, email, password)
            .then(cred=>{
                sendEmailVerification(cred.user)
                .then(()=>{console.log('email verification sent')})
                .catch(error=>console.error(error.message, 'error sending verification'))
                localStorage.setItem('user',JSON.stringify(cred.user));
             dispatch({type:'AUTH', payload:cred.user})
            })
            .catch(error=>{
                console.log('sign up error', error)
                alert('error')
            })
    }
    return(
        <div>
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
                    <Button type='primary' htmlType='submit' >submit</Button>
                </Form.Item>

            </Form>
            {!addy ? <div>or<NavLink to ='/ejuandy/logIn'>login</NavLink></div>:null }
        </div>
    )
}