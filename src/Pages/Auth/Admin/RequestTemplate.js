import { Link, useNavigate } from 'react-router-dom';
import './Admin.css';
import {Table} from 'antd';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../App';
export const RequestTemplate = ({request})=>{
    const navigate = useNavigate()

    const handleStatus =async(record)=>{
        const docRef= doc(db, 'Data', record.id);

        try{
        if(record.status === 'Action required'){
            await setDoc(docRef, {
                status:'In progress'
            },{merge:true});
            
        }

         navigate(`${record.id}`)
        }catch (error){
            console.error('error updating status', error)
        }
   
    }
 

    const columns = [

        {
            key :'1',
            title :'Name',
            dataIndex :'name'
        },

        {
            key: '2',
            title: 'phone',
            dataIndex:'phone'
        },
        {
            key: '3',
            title:'loan amount',
            dataIndex:'loanAmount'
        },
        {
            key: '4',
            title: 'status',
            dataIndex: 'status',

            filters:[
                {text:'In progress', value:'In progress'},
                {text: 'Indebt', value:'Indebt'},
                {text:'Settled', value:'Settled'},
                {text:'Action required', value:'Action required'}
            ],
            onFilter:(value, record)=>{
                return record.status === value
            }

        }

    ]


    return(
        <section>
            <div className="" >
 


                <Table
                    columns={columns}
                    dataSource={request}
                    onRow={(record)=>({
                        onClick:()=>{handleStatus(record)}
                    })}
                >

                </Table>

            </div>
        </section>
    )
}













                