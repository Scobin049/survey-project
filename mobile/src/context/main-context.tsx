import React, {useContext, useState} from 'react';

export const MainContext = React.createContext<any>({} as any);

export const MainProvider: React.FC = ({children}: any) => {
  const [isAdminLogged, setIsAdminLogged] = useState(false);
  const [isUserLogged, setIsUserLogged] = useState(false);

  const isLogged = (isAdmin: boolean) => {
    if (isAdmin) {
      setIsAdminLogged(true);
    } else {
      setIsUserLogged(true);
    }
  };

  return (
    <MainContext.Provider
      value={{
        isAdminLogged,
        isUserLogged,
        isLogged,
      }}>
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  const context = useContext(MainContext);

  return context;
};
