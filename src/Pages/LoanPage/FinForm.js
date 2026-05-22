
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Forms } from './Forms';
export const FinForm = ()=>{
    const {error} = AuthContext();

    return(
        <div>
            
           <Forms/>
           {error &&<p> {error.message}</p>}
        </div>
    )
}