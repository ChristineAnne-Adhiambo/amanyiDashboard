
import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from './components/Sidebar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const inter = Inter({ subsets: ['latin'] });


interface RootLayoutProps {
  showSidebar: boolean;
  children: React.ReactNode;
}

export default function RootLayout({
  children,
  showSidebar
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className} >
      <ToastContainer
      autoClose={5000}
      position='top-right'
      theme='dark'
      
      />
        <div className="flex">
          {showSidebar && <Sidebar />}
          <div className='w-full flex-1'>
            {children}
          </div>
        </div>

      </body>
    </html>
  );
}




















