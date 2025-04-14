
import { useNavigate } from 'react-router-dom'
import useUserStore from '../Store/userStore';
import { useEffect } from 'react';


interface Props {
    children: JSX.Element
}
const Protected = ({children}: Props) => {
  
    const  user = useUserStore((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
       
            if (!user) {
                navigate("/login");
            }       
    }, [user, navigate]);

    return user? <>{children}</>:null
    
  
}

export default Protected
