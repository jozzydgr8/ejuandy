import {  CheckCircleOutlined, UserOutlined, VerifiedOutlined } from '@ant-design/icons';
import {Button, Checkbox, DatePicker, Form, Input, Upload, Steps, Spin} from 'antd';
import { useState } from 'react';
import { HandleLoan } from '../Hooks/HandleLoan';
import {  useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../App';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
export const Forms = ()=>{
    const [current, setCurrent] = useState(0);
    const [detailValue, setDetailValue] = useState(null);
    const [guarantorValue, setGuarantorValue] = useState(null);
    const [verifyValue, setVerifyValue] = useState(null);
    const [verifyDisable, setVerifyDisable] = useState(false);
    const [error,setError] = useState(null);
    const [disable, setDisable] = useState(false);
    const{loanRequest} = HandleLoan();
    const {dispatch} = AuthContext();
    const navigate = useNavigate()

    const logOut = async ()=>{
        signOut(auth)
             .then(()=>{   
            navigate('/ejuandy')    
            localStorage.removeItem('user');
            dispatch({type: 'AUTH', payload:null})
        }
        )
    }

    const onFinishDetails = (values)=>{
        setDetailValue(values);
        setCurrent(1);
    }

    const changeDisable= (e)=>{
        console.log(e.target.checked);
        setVerifyDisable( e.target.checked)
        
        console.log(verifyDisable);
        
    }
   
    
    const onFinishGuarantor = (values)=>{
    setGuarantorValue(values);
    setCurrent(2);
        
    }
    
    const onFinishVerify = (values)=>{
        setDisable(true);
        setVerifyValue(values);
        
        loanRequest(detailValue, guarantorValue, values)
            .then(()=>{
                setCurrent(3);
                setDisable(false);
            }).catch(error=>{
                setError(error.message);
                setDisable(false)
                console.error(error.message);
                
            })
            ;

    }

    const displayForms = [
        <Details onFinish={onFinishDetails} initialValues={detailValue} />,
        <Guarantor onFinish={onFinishGuarantor} initialValues={guarantorValue} />,
        <Verify onFinish={onFinishVerify} initialValues={verifyValue} verifyDisable={verifyDisable} changeDisable={changeDisable} />,
        <Finish logOut={logOut} />
    ]

    const isStepDisbaled= (stepNumber)=>{
        if(stepNumber === 0){
            return false
        }
        if(stepNumber === 1){
            return detailValue === null
        }
        if(stepNumber === 2){
            return detailValue === null || guarantorValue === null
        }
        if(stepNumber === 3){
            return detailValue === null || guarantorValue === null || verifyValue === null
        }
    }
    return(
        <section>
            <div className='container-fluid'>
                {
                    disable ? <Spin size='large' className='isLoading' />:
                    <>
                 <Steps onChange={setCurrent} current={current}>
                    <Steps.Step disabled={isStepDisbaled(0)} title='Application' icon={<UserOutlined />}/>
                    <Steps.Step disabled={isStepDisbaled(1)} title='Guarantor' icon={<UserOutlined />}/>
                    <Steps.Step disabled={isStepDisbaled(0)} title='verify' icon={<VerifiedOutlined />}/>
                    <Steps.Step disabled={isStepDisbaled(0)} title='finish' icon={<CheckCircleOutlined/>} />
                </Steps>
                    {error && <p>{error}</p>}
                    {displayForms[current]}
                    </>
                }

                
            </div>
        </section>
    )
}

const Details = ({onFinish, initialValues})=>{
    return(
        <Form labelCol={{span:5}} onFinish={onFinish} initialValues={initialValues} >

                <Form.Item name={'applicant'} label={"Applicant's Full Name"} rules={[
                    {
                        required:true,
                        message:'please this field is required'
                    },{whitespace:true},{min:3}
                ]} hasFeedback>
                    <Input placeholder="Applicant's Name" />
                </Form.Item>

                <Form.Item name={'phone'} label={'phone'} rules={[
                    {
                        required:true,
                        message:'please this field is required'
                    }
                ]} hasFeedback>
                    <Input type='number'  placeholder='put in phone number' />
                </Form.Item>

                <Form.Item name={'email'} label={'email'} rules={[
                    {
                        required:true,
                        message:'please this field is required'
                    }
                ]} hasFeedback>
                    <Input type='email'  placeholder='put in email' />
                </Form.Item>

                <Form.Item name={"applicantHomeAddy"} label={"Home address"} rules={[
                    {
                        required:true,
                        message:'please this field is required'
                    },{whitespace:true}
                ]} hasFeedback>
                    <Input placeholder="Type in applicant's home address" />

                </Form.Item>

                <Form.Item name={"applicantOfficeAddy"} label={'office address'} rules={[
                    {
                        required:true,
                        message:'please this field is required'
                    },{whitespace:true}
                ]} hasFeedback>
                    <Input placeholder="Type in applicant's office address" />

                </Form.Item>

                <Form.Item name={'applicantTrade'} label={"Applicant's Trade"} rules={[
                    {
                        required:true,
                        message:'please this field is required'
                    },{whitespace:true}
                ]} hasFeedback>
                    <Input placeholder="Type in your trade or business" />

                </Form.Item>

                <Form.Item name={'loan'} label={'Loan Amount'} rules={[
                    {
                        required:true,
                        message:'please this field is required'
                    }
                ]} hasFeedback>
                    <Input type='number' placeholder='Type in your loan amount in naira' />

                </Form.Item>

                <Form.Item name={'repayment'} label={'Repayment Period'} rules={[
                    {
                        required:true,
                        message:'please this field is required'
                    }
                ]} hasFeedback>
                    <DatePicker.RangePicker style={{width:'100%'}} picker='date' placeholder='put in period of repayment' />
                </Form.Item>

                                 <Form.Item
                 label={'Applicant passport'}
                 name={'appPassport'}
                 rules={[{
                    required:true,
                    message:'please upload applicant picture'
                 }]}
                 hasFeedback
                 >

                    <Upload.Dragger
                    accept='image/*'
                    listType='picture'
                    >
                        <Button>upload applicant's passport please let picture be bold and clear</Button>
                    </Upload.Dragger>
                </Form.Item>


 
                <Form.Item wrapperCol={{span:24}}>
                    <Button block type='primary' htmlType='submit'>submit</Button>
                </Form.Item>
        </Form>
    )
}

const Guarantor = ({onFinish, initialValues})=>{
    return(
        <Form labelCol={{span:5}} onFinish={onFinish} initialValues={initialValues}>
             <Form.Item name={'guarantor'} label={"Guarantor's Full Name"} rules={[
                    {
                        required:true,
                        message:'please this field is required'
                    },{whitespace:true},{min:3}
                ]} hasFeedback>
                    <Input placeholder=' name of guarantor' />
                </Form.Item>

                <Form.Item name={'guarantorAddy'} label={"Guarantor's Address"}rules={[
                    {
                        required:true,
                        message:'please this field is required'
                    },{whitespace:true}
                ]} hasFeedback>
                    <Input placeholder='put in address of guarantor'/>
                </Form.Item>

                <Form.Item name={'guarantorPhone'} label={'Guarantor phone'} rules={[
                    {
                        required:true,
                        message:'please this field is required'
                    }
                ]} hasFeedback>
                    <Input type='number'  placeholder='put in guarantor phone number' />
                </Form.Item>

                
                <Form.Item
                label={'Guarantor passport'}
                 name={"guarantorPassport"}
                 rules={[{
                    required:true,
                    message:'please put in a picture of the guarantor'
                 }]}
                 hasFeedback

                >
                    <Upload.Dragger
                    accept='image/*'
                    listType='picture'
                    maxCount={1} 
                    >
                        <Button>Upload guarantor's passport please let picture be bold and clear</Button>
                    </Upload.Dragger>
                </Form.Item>


                <Form.Item wrapperCol={{span:24}}>
                    <Button block type='primary' htmlType='submit'>submit</Button>
                </Form.Item>
        </Form>
    )
}

const Verify = ({onFinish, initialValues, verifyDisable, changeDisable})=>{
    return(
         <Form labelCol={{span:5}} onFinish={onFinish} initialValues={initialValues} >
             <Form.Item
                name={'document'}
                label={'Document for validation'}


                rules={[
                    {
                        required:true,
                        message:'please upload any of the document applicable'
                    },
                ]}
                hasFeedback
                >
                    <Upload.Dragger
                    maxCount={1}
                    listType='picture'
                    accept='image/*'
                    >
                        Upload document for verification
                        <Button>Upload document National ID card, PVC, Driver's License are applicable. </Button>
                    </Upload.Dragger>
                </Form.Item>

                <Form.Item wrapperCol={{span:24}}>
                    <Checkbox
                    checked={verifyDisable}
                     onChange={changeDisable} >By clicking this you hereby accept <a href='#'>The terms and conditions</a> </Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{span:24}}>
                    <Button disabled={!verifyDisable} block type='primary' htmlType='submit'>submit</Button>
            </Form.Item>
         </Form>
    )
}

const Finish = ({logOut})=>{
    return(
        <div>
        <h1>you are all set <CheckCircleOutlined/> </h1>
        please be patient while we verify your details we will reach out to you as soon as possible!
        <a onClick={logOut}  block className='btn btn-primary' htmlType='submit' >finish</a>
        </div>
    )
}


