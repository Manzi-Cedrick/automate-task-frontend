import React, { useState, useEffect } from 'react';
import authService from '../services/auth.service';
import LoaderPage from '../components/loaders/loader';

const RouteProtection = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState<any | undefined>(undefined);
    const [loader, setLoader] = useState(false)

    const checkAuthentication = async () => {
      try {
        setLoader(true)
        const response = await authService.isLoggedIn();
        if (response && response.data) {
          setUser(response.data.user);
          setAuthenticated(true);
          setLoader(false)
          if (response?.data?.message === 'User not found') {
            window.location.pathname = '/auth/login';
          }
        }
      } catch (error: any) {
        window.location.pathname = '/auth/login';
      }
    };

    useEffect(() => {
      checkAuthentication();
    }, []);
    if (loader) {
      return <LoaderPage />
    }
    if (authenticated && !loader) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };

  return Wrapper;
};

export default RouteProtection;
