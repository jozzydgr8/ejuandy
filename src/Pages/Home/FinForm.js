
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Forms } from './Forms';
import { signOut } from 'firebase/auth';
import { auth } from '../../App';
export const FinForm = ()=>{
    const {error} = AuthContext();
    const navigate = useNavigate();
    const homePage = ()=>{
        signOut(auth)
            .then(()=>{
                localStorage.removeItem('user');
                navigate('/ejuandy')
            })
    }
    return(
        <div>
            <button className='btn' onClick={homePage}> click to go back to homePage</button>
           <Forms/>
           {error &&<p> {error.message}</p>}
        </div>
    )
}