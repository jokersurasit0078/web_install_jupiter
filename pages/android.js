import React, { useRef, useState } from 'react';
import RefectProvider from "../provider/RefetchProvider"

const Index = () => {
  const jupiterApk = 'jupiter-15122023.apk';
  const dateUpdateLasted = '15/12/2023 18:30';
  const textButton = '* กรณีที่ไม่สามารถดาวน์โหลดได้ สามารถคลิกที่นี่เพื่อนำลิงค์ไปเปิดที่เว็บบราวเซอร์ข้างนอกได้';
  const copyRef = useRef();
  const [isCopy, setIsCopy] = useState(false);

  const copyClipboard = () => {
    navigator.clipboard.writeText(process.env.NEXT_PUBLIC_HOSTNAME + 'android');
    copyRef.current.innerText = `Copied ✅`;
    setIsCopy(true);
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
            <div className='bg-lime-200 px-4 rounded-xl'>
              <a
                href={jupiterApk}
                className='flex items-center mb-4 mt-4 lg:text-lg text-[16px] font-bold text-black'
              >
                <img src='android.png' className='w-8 mr-2' />
                Update Jupiter(PTTPLC) for Android v{process.env.NEXT_PUBLIC_PTTPLC_ANDROID_VERSION}
              </a>
            </div>
            <div className='mt-4 text-[14px] font-bold text-red-500'>
              {textButton}
            </div>
            <button ref={copyRef} onClick={copyClipboard} className={`mt-4 ${isCopy ? 'bg-slate-400' : 'bg-green-500'} p-2 rounded-lg text-white text-[16px]`}>
              {'Copy Link'}
            </button>
            <div className='mt-6 text-sm'>PTT Digital Solution Co., Ltd.</div>
          </div>
        </div>
      </RefectProvider>
    </div>
  );
};

export default Index;
