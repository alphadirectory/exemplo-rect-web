/* eslint-disable react/jsx-props-no-spreading */
import { useAuthContext } from '@/features/auth/contexts/auth';
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { screens } from "./index";

interface PrivateRouteProps extends Omit<RouteProps, 'component'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}: PrivateRouteProps) => {
  const [{ user }] = useAuthContext();

  return (
    <Route
      {...rest}
      render={props => {
        if (user)
          return <Component {...props} />;
        return <Redirect to={screens.public.singIn} />;
      }}
    />
  );
};

export default PrivateRoute;