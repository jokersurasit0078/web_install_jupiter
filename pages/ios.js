import React from 'react';
import RefectProvider from "../provider/RefetchProvider"

const Index = () => {
  const link = [
    'itms-services://',
    '?action=download-manifest',
    `&url=${process.env.NEXT_PUBLIC_HOSTNAME}manifest.plist`,
  ];
  const dateUpdateLasted = '03/11/2023 19:00';
  const ios = link.join('');

  const copyClipboard = () => {
    navigator.clipboard.writeText(process.env.NEXT_PUBLIC_HOSTNAME + 'ios');
  }

  return (
    <div className='bg-twilight-blue flex justify-center items-center h-screen p-4'>
      <title>Update PTTPLC</title>
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
                Update Jupiter(PTTPLC) for iOS v{process.env.NEXT_PUBLIC_PTTPLC_IOS_VERSION}
              </a>
            </div>
            <button onClick={copyClipboard} className='mt-4 bg-red-300 p-2 rounded-xl text-white text-[16px]'>
              กรณีที่ไม่สามารถดาวน์โหลดได้ สามารถคลิกที่นี่เพื่อนำลิงค์ไปเปิดที่เว็บบราวเซอร์ข้างนอกได้
            </button>
            <div className='mt-4 text-[16px] font-bold'>
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
