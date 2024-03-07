import RefectProvider from "../../provider/RefetchProvider"
import React, { } from 'react';

const Index = () => {
  const link = [
    'itms-services://',
    '?action=download-manifest',
    `&url=${process.env.NEXT_PUBLIC_FAST_HOSTNAME}/manifest-fast.plist`,
  ];
  const jupiterApk = '/fast/app-release-fast.apk';
  const dateUpdateLasted = '07/03/2024 11:50 (2)';
  const ios = link.join('');
  const prepath = '../';
  const description = 'DESCRIPTION CER:PLC|ORG:JU0001|BRANCH:PRE-MERGE-RFID-ROUTE';

  return (
    <div className='bg-twilight-blue flex justify-center items-center h-screen p-4'>
      <title>Install Jupiter (FAST)</title>
      <RefectProvider>
        <div className='max-w-md m-auto'>
          <div className='max-w-xs m-auto'>
            <img src={`${prepath}jupiter_top.png`} draggable={false} />
          </div>
          <img src={`${prepath}logo.png`} className='my-8 px-4 max-w-xs m-auto' />
          <div className='flex flex-col justify-center items-center'>
            <div className='bg-blue-400 px-3 rounded-xl shadow-2xl'>
              <a
                href={ios}
                className='flex items-center mb-2 mt-2 lg:text-lg text-[16px] font-bold text-white'
              >
                <img src={`${prepath}ios.png`} className='w-8 mr-2' />
                Install Jupiter for iOS (FAST)
              </a>
            </div>
            <div className='py-2' />
            <div className='bg-lime-200 px-3 rounded-xl shadow-2xl'>
              <a
                href={jupiterApk}
                className='flex items-center mb-2 mt-2 lg:text-lg text-[16px] font-bold text-black'
              >
                <img src={`${prepath}android.png`} className='w-8 mr-2' />
                Install Jupiter for Android (FAST)
              </a>
            </div>
            <div className={'mt-4 text-[12px] font-bold text-red-700 text-center'}>
              {description}
            </div>
            <div className={'mt-1 text-[16px] font-bold'}>
              {'Last updated on : ' + dateUpdateLasted}
            </div>
            <div className='mt-6 text-sm'>PTT Digital Solution Co., Ltd.</div>
          </div>
        </div>
      </RefectProvider>
    </div>
  );
};

export default Index;
