import React, {useContext, useState} from 'react';

export const MainContext = React.createContext<any>({} as any);

export const MainProvider: React.FC<any> = ({children}: any) => {
  const [user, setUser] = useState({});
  const [isAdminLogged, setIsAdminLogged] = useState(false);
  const [isUserLogged, setIsUserLogged] = useState(false);

  const isLogged = (isAdmin: boolean, userLogged: any) => {
    console.log('isAdmin', isAdmin);
    console.log('userLogged', userLogged);
    setUser(userLogged);
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
        user,
      }}>
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  const context = useContext(MainContext);

  return context;
};
