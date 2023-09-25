import React from "react";

const Index = () => {
  const link = [
    "itms-services://",
    "?action=download-manifest",
    `&url=${process.env.NEXT_PUBLIC_HOSTNAME}manifest.plist`,
  ];
  const dateUpdateLasted = '25/09/2023 17:50 (4)';
  const ios = link.join("");
  return (
    <div className="bg-twilight-blue flex justify-center items-center h-screen p-4">
      <div className="max-w-md m-auto">
        <div className="max-w-xs m-auto">
          <img src="jupiter_top.png" draggable={false} />
        </div>
        <img src="logo.png" className="my-8 px-4 max-w-xs m-auto" />
        <div className="flex flex-col justify-center items-center">
          <a
            href={ios}
            className="flex items-center mb-4 mt-4 lg:text-lg text-[16px] font-bold"
          >
            <img src="ios.png" className="w-8 mr-2" />
            Install Jupiter(PTTPLC) on iOS Version{" "}
            {process.env.NEXT_PUBLIC_PTTPLC_IOS_VERSION}
          </a>
          <a
            href="jupiter.apk"
            className="flex items-center lg:text-lg text-[16px] font-bold"
          >
            <img src="android.png" className="w-8 mr-2" />
            Install Jupiter(PTTPLC) on Android Version{" "}
            {process.env.NEXT_PUBLIC_PTTPLC_ANDROID_VERSION}
          </a>
          <div className="mt-4 text-[16px] font-bold">
            {'Last updated on : ' + dateUpdateLasted}
          </div>
          <div className="mt-6 text-sm">PTT Digital Solution Co., Ltd.</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
