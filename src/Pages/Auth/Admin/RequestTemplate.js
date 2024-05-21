import { Link, useNavigate } from 'react-router-dom';
import './Admin.css';
import {Table} from 'antd';
export const RequestTemplate = ({request})=>{
    const navigate = useNavigate()
 

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
                        onClick:()=>{navigate(`${record.id}`)}
                    })}
                >

                </Table>

            </div>
        </section>
    )
}




















               {/* <div key={request.id} className="clientDiv row">
                    <div className='col-6'>
                    Name: {request.name}
                    <p>loan-amount: {request.loanAmount}</p>

                    <div> <a href={`tel:${request.phone}`} > call {request.name} </a> </div>
                    </div>

                    //seconf grid
                    <div className='col-6'>
                        <img src={request.passport} alt='passport' />
                    </div>

                </div> */}

                