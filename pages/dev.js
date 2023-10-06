import React, { useEffect, useState } from 'react';

const Index = () => {
  const link = [
    'itms-services://',
    '?action=download-manifest',
    `&url=${process.env.NEXT_PUBLIC_HOSTNAME}manifest.plist`,
  ];
  const link_dev = [
    'itms-services://',
    '?action=download-manifest',
    `&url=${process.env.NEXT_PUBLIC_HOSTNAME}manifest-dev.plist`,
  ];
  const dateUpdateLastediOS = '06/10/2023 11:20 (1)';
  const dateUpdateLastedAndroid = '06/10/2023 11:20 (1)';
  const ios = link.join('');
  const ios_dev = link_dev.join('');
  const [dateNow, setDateNow] = useState(new Date);

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
    const inputDate = new Date(year, month, day);;
    // Compare the input date with the current date
    return (
      inputDate.getDate() === dateNow.getDate() &&
      inputDate.getMonth() === dateNow.getMonth() &&
      inputDate.getFullYear() === dateNow.getFullYear()
    );
  }

  return (
    <div className='bg-twilight-blue flex justify-center items-center h-screen p-4'>
      <title>Install PTTPLC Dev</title>
      <div className='max-w-md m-auto'>
        <div className='max-w-xs m-auto'>
          <img src='jupiter_top.png' draggable={false} />
        </div>
        <img src='logo.png' className='my-8 px-4 max-w-xs m-auto' />
        <div className='flex flex-col justify-center items-center'>
          <a
            href={ios_dev}
            className='flex items-center mb-4 mt-4 lg:text-lg text-[16px] font-bold'
          >
            <img src='ios.png' className='w-8 mr-2' />
            PTTPLC-DEV on iOS Version{' '}
            {process.env.NEXT_PUBLIC_PTTPLC_IOS_VERSION}
          </a>
          <a
            href='jupiter-dev.apk'
            className='flex items-center lg:text-lg text-[16px] font-bold'
          >
            <img src='android.png' className='w-8 mr-2' />
            PTTPLC-DEV on Android Version{' '}
            {process.env.NEXT_PUBLIC_PTTPLC_ANDROID_VERSION}
          </a>
          <div className={'mt-4 text-[16px] font-bold' + (isDateEqualNow(dateUpdateLastediOS) ? ' text-red-500' : '')}>
            {'Last iOS updated on : ' + dateUpdateLastediOS}
          </div>
          <div className={'text-[16px] font-bold' + (isDateEqualNow(dateUpdateLastedAndroid) ? ' text-red-500' : '')} >
            {'Last Android updated on : ' + dateUpdateLastedAndroid}
          </div>
          <div className='mt-6 text-sm'>PTT Digital Solution Co., Ltd.</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
