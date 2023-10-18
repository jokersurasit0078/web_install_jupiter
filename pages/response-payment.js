import React, { useEffect, useState } from 'react';
import RefectProvider from "../provider/RefetchProvider"

const ResponePayment = () => {
  useEffect(() => {

  }, []);

  return (
    <div className='bg-twilight-blue flex justify-center items-center h-screen p-4'>
      <title>Verify Payment Success</title>
      <RefectProvider>
        <div className='max-w-md m-auto'>
          <div className='max-w-xs m-auto'>
            <img src='jupiter_top.png' draggable={false} />
          </div>
          <img src='logo.png' className='my-8 px-4 max-w-xs m-auto' />
        </div>
      </RefectProvider>
    </div>
  );
};

export default ResponePayment;
