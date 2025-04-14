
import { useNavigate } from 'react-router-dom'
import useUserStore from '../Store/userStore';
import { useEffect } from 'react';


interface Props {
    children: React.ReactNode
}
const Protected = ({children}: Props) => {
  
    const  user = useUserStore((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        const timer= setTimeout(() => {
            if (!user) {
                navigate("/login");
            }
        },100);

        return () => clearTimeout(timer);
    }, [user, navigate]);

    return <div>{children}</div>
    
  
}

export default Protected
