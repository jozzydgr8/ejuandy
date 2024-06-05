import {  CheckCircleOutlined, UploadOutlined, UserOutlined, VerifiedOutlined } from '@ant-design/icons';
import {Button, Checkbox, DatePicker, Form, Input, Upload, Steps, Spin} from 'antd';
import { useState } from 'react';
import { HandleLoan } from '../Hooks/HandleLoan';
import {  useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../App';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Modal } from './Modal';
import { TermsHook } from '../Hooks/TermsHook';
export const Forms = ()=>{
    const [current, setCurrent] = useState(0);
    const [detailValue, setDetailValue] = useState(null);
    const [guarantorValue, setGuarantorValue] = useState(null);
    const [verifyValue, setVerifyValue] = useState(null);
    const [verifyDisable, setVerifyDisable] = useState(false);
    const [verifyGuarantor, setVerifyGuarantor] = useState(false);
    const [error,setError] = useState(null);
    const [disable, setDisable] = useState(false);
    const [fileList, setFileList] = useState([])
    const [guarantorList, setGuarantorList] = useState([]);
    const [verifyList, setVerifyList] = useState([]);
    const [writeUp, setWriteUp] = useState('');
    const{loanRequest} = HandleLoan();
    const {dispatch} = AuthContext();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)
    const {applicantTerm, guarantorTerm} = TermsHook();
    
    //navigate function
    const homePage = ()=>{
        signOut(auth)
            .then(()=>{
                navigate('/ejuandy')
            })
    }
// applicant onfinish
    const handleFileChange=({fileList})=>{
        setFileList(fileList)
    }
    //set dynamic write up
    const writeTerms = ()=>{
        const terms = guarantorTerm();
        setWriteUp(terms);
    }
    //set applicant terms
    const writeAppTerms = ()=>{
        const terms = applicantTerm()
        setWriteUp(terms)
    }
//guarantor modal
    const openModal = ()=>{
        writeTerms();
        setIsOpen(true);
    }
//applicant modal
    const verifyModal = ()=>{
        writeAppTerms();
        setIsOpen(true);
    }
    //guaranot onfinidh
    const handleGuarantorChange = ({fileList})=>{
        setGuarantorList(fileList);
    }
    const handleVerifyChange = ({fileList})=>{
        setVerifyList(fileList);
    }
    const logOut = async ()=>{
        signOut(auth)
             .then(()=>{   
            navigate('/ejuandy')    
            dispatch({type: 'AUTH', payload:null})
        }
        )
    }

    const onFinishDetails = (values)=>{
        setDetailValue(values);
        setCurrent(1);
    }
//code to eccept request terms and coditions
    const changeDisable= (e)=>{
        
        setVerifyDisable( e.target.checked)
        
        
    }
    const changeGuarantorAccept =(e)=>{
        
        setVerifyGuarantor(e.target.checked)
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
        <Details  onFinish={onFinishDetails} initialValues={detailValue} fileList={fileList} handleFileChange={handleFileChange} />,
        <Guarantor  openModal={openModal} guarantorList={guarantorList} handleGuarantorChange={handleGuarantorChange} onFinish={onFinishGuarantor} initialValues={guarantorValue} verifyGuarantor={verifyGuarantor} changeGuarantorAccept={changeGuarantorAccept} />,
        <Verify verifyModal={verifyModal} verifyList={verifyList} handleVerifyChange={handleVerifyChange} onFinish={onFinishVerify} initialValues={verifyValue} verifyDisable={verifyDisable} changeDisable={changeDisable} />,
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
                    <button className='btn' onClick={homePage}> click to go back to homePage</button>
                 <Steps onChange={setCurrent} current={current}>
                    <Steps.Step disabled={isStepDisbaled(0)} title='Application' icon={<UserOutlined />}/>
                    <Steps.Step disabled={isStepDisbaled(1)} title='Guarantor' icon={<UserOutlined />}/>
                    <Steps.Step disabled={isStepDisbaled(2)} title='verify' icon={<VerifiedOutlined />}/>
                    <Steps.Step disabled={isStepDisbaled(3)} title='finish' icon={<CheckCircleOutlined/>} />
                </Steps>
                    {error && <p>{error}</p>}
                    {displayForms[current]}
                    <Modal open={isOpen}>
                        {writeUp}
                        <div><button onClick={()=>setIsOpen(false)} className="btn btn-primary">Done</button></div>
                    </Modal>
                    </>
                }

                
            </div>
        </section>
    )
}

const Details = ({onFinish, initialValues, fileList, handleFileChange})=>{
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
                    },{whitespace:true},
                    {validator: (_, value)=>{
                        if(value && value.startsWith('0')){
                            return Promise.reject(new Error('Input can not start with 0'));
                        }
                        return Promise.resolve();
                    }}
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
                    fileList = {fileList}
                    onChange={handleFileChange}

                    >
                        <Button icon={<UploadOutlined/>}>upload applicant's passport please let picture be bold and clear</Button>
                    </Upload.Dragger>
                </Form.Item>


 
                <Form.Item wrapperCol={{span:24}}>
                    <Button block type='primary' htmlType='submit'>submit</Button>
                </Form.Item>
        </Form>
    )
}



/// guarantor----------------------------------------------guarantor-----------------

const Guarantor = ({openModal, onFinish, initialValues, verifyGuarantor, changeGuarantorAccept, guarantorList, handleGuarantorChange})=>{
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
                    fileList={guarantorList}
                    onChange={handleGuarantorChange}
                    maxCount={1} 
                    >
                        <Button icon={<UploadOutlined/>}>Upload guarantor's passport please let picture be bold and clear</Button>
                    </Upload.Dragger>
                </Form.Item>


                <Form.Item wrapperCol={{span:24}}>
                    <Checkbox
                    checked={verifyGuarantor}
                     onChange={changeGuarantorAccept} >By clicking this guarantor hereby accept <span className='modalLink' onClick={ openModal}>The terms and conditions</span> </Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{span:24}}>
                    <Button disabled={!verifyGuarantor} block type='primary' htmlType='submit'>submit</Button>
            </Form.Item>
        </Form>
    )
}


/////////////////////////////// verify -------------------------------- verify
const Verify = ({verifyModal,onFinish, initialValues, verifyDisable, changeDisable, verifyList, handleVerifyChange})=>{
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
                    fileList={verifyList}
                    onChange={handleVerifyChange}
                    >
                        Upload document for verification
                        <Button icon={<UploadOutlined/>}>Upload document National ID card, PVC, Driver's License are applicable. </Button>
                    </Upload.Dragger>
                </Form.Item>

                <Form.Item wrapperCol={{span:24}}>
                    <Checkbox
                    checked={verifyDisable}
                     onChange={changeDisable} >By clicking this you hereby accept <span onClick={verifyModal} className='modalLink'>The terms and conditions</span> </Checkbox>
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


