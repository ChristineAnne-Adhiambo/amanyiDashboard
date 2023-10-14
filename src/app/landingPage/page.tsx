'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
const Home = () => {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
      router.push('/landingPage');
    }, 5000);
    return () => clearTimeout(timeout);
  }, [router]);
  return (
    <div className={`h-screen relative ${showSplash ? '' : 'hidden'}`} style={{ backgroundImage: `url('/images/clean.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw' }}>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-2xl font-bold text-center bg-[#082E58] bg-opacity-80 text-white p-9 shadow-lg w-3/6 h-[62%] mb-20 rounded-md">
          <div className="mb-[10px] flex flex-col items-center justify-center space-y-8">
            <img src="/images/Amanyi-Logo.png" alt="Amanyi logo" />
            <h1 className="text-5xl mb-7">Welcome To Aqua'Manyi.</h1>
            <p className="text-3lg">Preserving Aquatic Lives</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;