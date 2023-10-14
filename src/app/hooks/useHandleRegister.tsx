import { useState } from 'react';
import { createUser } from '../utilities/utils';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const useRegister = () => {
  const router = useRouter()
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleRegister = async (userData: UsersData) => {
    setLoading(true)
    setError('')
    const response = await createUser(userData);
    setLoading(false)
    
    if (response.error) {
      setError(response.error)
      return
    }
   
      setUser(response);
      toast('Registered  Successfully')
      router.push('/signin')

  };
  return { handleRegister, loading, user, error };``
  
};
export default useRegister;




