import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ReactProvider = ({ children }) => {
  const router = useRouter();

  const onFocus = () => {
    router.reload();
  };

  // const onBlur = () => {
  // };

  useEffect(() => {
    window.addEventListener("focus", onFocus);
    // window.addEventListener("blur", onBlur);

    return () => {
      window.removeEventListener("focus", onFocus);
      // window.removeEventListener("blur", onBlur);
    };
  }, []);

  return <>{children}</>;
};

export default ReactProvider;
