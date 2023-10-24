import React, { useEffect, useState } from 'react';
import RefectProvider from "../provider/RefetchProvider"

const Index = () => {
  const link_dev = [
    'itms-services://',
    '?action=download-manifest',
    `&url=${process.env.NEXT_PUBLIC_HOSTNAME}manifest-dev.plist`,
  ];
  const jupiterApk = 'jupiter-dev-25102023.apk';
  const dateUpdateLastediOS = '17/10/2023 14:40 (1)';
  const dateUpdateLastedAndroid = '25/10/2023 09:00 (1)';
  const ios_dev = link_dev.join('');
  const [dateNow, setDateNow] = useState(new Date);
  const versiobCode = '1.0.1+2';

  useEffect(() => {
    setDateNow(new Date);
  }, []);

  function isDateEqualNow(dateString) {
    // Format 'DD/MM/YYYY'
    const subStr = dateString.split(' ');
    // Create a Date object for the given date string
    const parts = subStr[0].split('/');
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1; // Months are zero-based (0-11)
    const year = parseInt(parts[2]);
    const inputDate = new Date(year, month, day);
    // Compare the input date with the current date
    return (
      inputDate.getDate() === dateNow.getDate() &&
      inputDate.getMonth() === dateNow.getMonth() &&
      inputDate.getFullYear() === dateNow.getFullYear()
    );
  }

  return (
    <div className='bg-twilight-blue flex justify-center items-center h-screen p-4'>
      <title>Install PTTPLC Dev </title>
      <RefectProvider>
        <div className='max-w-md m-auto'>
          <div className='max-w-xs m-auto'>
            <img src='jupiter_top.png' draggable={false} />
          </div>
          <img src='logo.png' className='my-8 px-4 max-w-xs m-auto' />
          <div className='flex flex-col justify-center items-center'>
            <div className='bg-blue-400 px-4 rounded-xl'>
              <a
                href={ios_dev}
                className='flex items-center mb-4 mt-4 lg:text-lg text-[16px] font-bold text-white'
              >
                <img src='ios.png' className='w-8 mr-2' />
                PTTPLC-DEV on iOS Version{' '}
                {versiobCode}
              </a>
            </div>
            <div className='py-2' />
            <div className='bg-lime-200 px-4 rounded-xl'>
              <a
                href={jupiterApk}
                className='flex items-center mb-4 mt-4 lg:text-lg text-[16px] font-bold text-black'
              >
                <img src='android.png' className='w-8 mr-2' />
                PTTPLC-DEV on Android Version{' '}
                {versiobCode}
              </a>
            </div>
            <div className={'mt-4 text-[16px] font-bold' + (isDateEqualNow(dateUpdateLastediOS) ? ' text-red-500' : '')}>
              {'Last iOS updated on : ' + dateUpdateLastediOS}
            </div>
            <div className={'text-[16px] font-bold' + (isDateEqualNow(dateUpdateLastedAndroid) ? ' text-red-500' : '')} >
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
