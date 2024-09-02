import React from 'react';
import Case from './Components/Case';

export default function Home() {
  return (
    <>
    <Case />
    <div className='bg-gray-900 flex items-center justify-center min-h-screen'>
        <div className="bg-gray-800 border-t border-gray-600 shadow rounded-lg max-w-lg w-full p-6">
            <h4 className='text-white text-2xl'>Hallo User</h4>
            <p className='text-lg text-gray-400 leading-relaxed'>Web ini adalah web untuk mengelola data siswa</p>
        </div>
    </div>
    
    
    </>
  );
}
