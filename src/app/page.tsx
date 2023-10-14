'use client'
import React, { useEffect, useState } from 'react';
import cookie from 'cookiejs';
import { useRouter } from 'next/navigation'; // Change from 'next/navigation';

const LandingPage = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const userLoggedIn = Boolean(cookie.get('sessionToken'));
    setLoading(false);

    if (userLoggedIn) {
      setIsUserLoggedIn(userLoggedIn);
      setTimeout(() => {
        router.push('/homePage');
      }, 8000)
    } else {
      setTimeout(() => {
        router.push('/signin');
      }, 8000);
    }

  }, [router]);

  if (loading)
     return <div className="h-screen flex items-center justify-center text-4xl">
    Loading, please wait... &#128522;
  </div>

  return (
    
      <div className={`h-screen relative ${isUserLoggedIn ?'Welcome back! 👋' :'Redirecting you to Sign In page, just a moment... ➡️'}`} style={{ backgroundImage: `url('/images/clean.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw'}}>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-2xl font-bold text-center bg-[#082E58] bg-opacity-80 text-white p-9 shadow-lg w-3/6 h-[62%] mb-20 rounded-md">
            <div className="mb-[10px] flex flex-col items-center justify-center space-y-8">
              <img src="/images/Amanyi-Logo.png" alt="Amanyi logo" />
              <h1 className="text-5xl mb-7">Welcome back! 👋</h1>
              <h5 className="text-5xl mb-7"> Aqua'Manyi,</h5>
              <p className="text-3lg">Preserving Aquatic Lives</p>
            </div>
          </div>
        </div>
      </div>
    );
  
};

export default LandingPage;