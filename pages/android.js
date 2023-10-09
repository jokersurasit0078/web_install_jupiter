import React from 'react';

const Index = () => {
  const jupiterApk = 'jupiter-09102023.apk';
  const dateUpdateLasted = '06/10/2023 11:20 (1)';
  return (
    <div className='bg-twilight-blue flex justify-center items-center h-screen p-4'>
      <title>Install PTTPLC</title>
      <div className='max-w-md m-auto'>
        <div className='max-w-xs m-auto'>
          <img src='jupiter_top.png' draggable={false} />
        </div>
        <img src='logo.png' className='my-8 px-4 max-w-xs m-auto' />
        <div className='flex flex-col justify-center items-center'>
          <div className='bg-lime-200 px-4 rounded-xl'>
            <a
              href={jupiterApk}
              className='flex items-center mb-4 mt-4 lg:text-lg text-[16px] font-bold text-black'
            >
              <img src='android.png' className='w-8 mr-2' />
              Install Jupiter(PTTPLC) for Android
            </a>
          </div>
          <div className='mt-4 text-[16px] font-bold'>
            {'Last updated on : ' + dateUpdateLasted}
          </div>
          <div className='mt-6 text-sm'>PTT Digital Solution Co., Ltd.</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
