import RefectProvider from "../provider/RefetchProvider"
import React, { } from 'react';

const Index = () => {
  const link = [
    'itms-services://',
    '?action=download-manifest',
    `&url=${process.env.NEXT_PUBLIC_HOSTNAME}manifest.plist`,
  ];
  const jupiterApk = 'jupiter-14022024.apk';
  // NEW
  const dateUpdateLastediOS = '14/02/2024 09:40 (1)';
  const dateUpdateLastedAndroid = '14/02/2024 09:40 (1)';
  // OLD
  // const dateUpdateLastediOS = '15/12/2023 18:30 (1)';
  // const dateUpdateLastedAndroid = '15/12/2023 18:30 (1)';
  const ios = link.join('');

  return (
    <div className='bg-twilight-blue flex justify-center items-center h-screen p-4'>
      <title>Install PTTPLC</title>
      <RefectProvider>
        <div className='max-w-md m-auto'>
          <div className='max-w-xs m-auto'>
            <img src='jupiter_top.png' draggable={false} />
          </div>
          <img src='logo.png' className='my-8 px-4 max-w-xs m-auto' />
          <div className='flex flex-col justify-center items-center'>
            <div className='bg-blue-400 px-4 rounded-xl'>
              <a
                href={ios}
                className='flex items-center mb-4 mt-4 lg:text-lg text-[16px] font-bold text-white'
              >
                <img src='ios.png' className='w-8 mr-2' />
                Install Jupiter(PTTPLC) for iOS
              </a>
            </div>
            <div className='py-2' />
            <div className='bg-lime-200 px-4 rounded-xl'>
              <a
                href={jupiterApk}
                className='flex items-center mb-4 mt-4 lg:text-lg text-[16px] font-bold text-black'
              >
                <img src='android.png' className='w-8 mr-2' />
                Install Jupiter(PTTPLC) for Android
              </a>
            </div>
            <div className={'mt-4 text-[16px] font-bold'}>
              {'Last iOS updated on : ' + dateUpdateLastediOS}
            </div>
            <div className={'text-[16px] font-bold'} >
              {'Last Android updated on : ' + dateUpdateLastedAndroid}
            </div>
            <div className='mt-6 text-sm'>PTT Digital Solution Co., Ltd.</div>
          </div>
        </div>
      </RefectProvider>
    </div>
  );
};

export default Index;
