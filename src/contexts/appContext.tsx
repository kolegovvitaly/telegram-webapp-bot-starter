import React, { createContext, useEffect, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

export const webAppContext = createContext<WebApp>({} as WebApp);

const WebAppProvider = ({ children }: IProps) => {
  const [app, setApp] = useState({} as WebApp);

  useEffect(() => {
    setApp(window.Telegram.WebApp);
  }, []);

  useEffect(() => {
    if (!app) return;
    app.ready && app.ready();
  }, [app]);

  return (
    <webAppContext.Provider value={app}>{children}</webAppContext.Provider>
  );
};

export default WebAppProvider;
