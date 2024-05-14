
import { Form, Input, Button } from 'antd';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../App';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

export const Login = ()=>{
    const {dispatch} = AuthContext();
    const signIn = (values)=>{
        const {email, password} = values;
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential=>{
                localStorage.setItem('user',JSON.stringify(userCredential.user));
             dispatch({type:'AUTH', payload:userCredential.user})
            }).catch(error=>{
                console.log('sign in error', error)
                alert('error')
            })
    }
    return(
        <div>
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
                    <Button type='primary' htmlType='submit' >submit</Button>
                </Form.Item>

            </Form>
        </div>
    )
}