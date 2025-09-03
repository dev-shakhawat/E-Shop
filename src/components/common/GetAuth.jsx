import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getUserData from '../../helpers/getUserData';
import { useNavigate } from 'react-router';
import { userSet } from '../../redux/slices/userSlice';

export default function GetAuth() { 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect( () => { 

        (async function hudai(){
          const information = await getUserData() 
    
          if(!information?.data?.emailVerified){
            navigate(`/authorize/${information.data._id}`)
          }
          
          dispatch(userSet(information.data))
    
        }())
      
        
      }, []);
  return  
}
