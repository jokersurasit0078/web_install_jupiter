import React from "react";

const Index = () => {
  const link = [
    "itms-services://",
    "?action=download-manifest",
    `&url=${process.env.NEXT_PUBLIC_HOSTNAME}manifest.plist`,
  ];
  const ios = link.join("");
  return (
    <div className="bg-twilight-blue flex justify-center items-center h-screen">
      <div className="max-w-md m-auto">
        <div className="max-w-xs m-auto">
          <img src="jupiter_top.png" draggable={false} />
        </div>
        <img src="logo.png" className="my-8 px-4 max-w-xs m-auto" />
        <div className="flex flex-col justify-center items-center">
          <a
            href={ios}
            className="flex items-center mb-4 mt-4 lg:text-lg text-[20px]"
          >
            <img src="ios.png" className="w-8 mr-2" />
            Install on iOS Version {process.env.NEXT_PUBLIC_IOS_VERSION}
          </a>
          <a
            href="app-release.apk"
            className="flex items-center lg:text-lg text-[20px]"
          >
            <img src="android.png" className="w-8 mr-2" />
            <a href="app-release.apk">
              Install on Android Version{" "}
              {process.env.NEXT_PUBLIC_ANDROID_VERSION}{" "}
            </a>
          </a>
          <div className="mt-8 text-sm">PTT Digital Solution Co., Ltd.</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
