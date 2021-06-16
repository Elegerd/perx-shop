import React from 'react';
import {
  Route as ReactRouterRoute,
  RouteProps as DefaultRouteProps,
  Switch,
} from 'react-router-dom';

export interface RouteProps<TLayoutProps> extends DefaultRouteProps {
  layout?: React.ElementType<TLayoutProps>;
  layoutProps?: Partial<TLayoutProps>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const PassThrough = ({ children }: { children?: React.ReactNode }) => <>{children}</>;

function Route<TLayoutProps>({
  layout: Layout = PassThrough,
  component: Component = PassThrough,
  layoutProps,
  componentProps,
  children,
  ...rest
}: RouteProps<TLayoutProps>) {
  const LayoutComponent = Layout as React.ElementType;

  return (
    <ReactRouterRoute
      {...rest}
      render={props => {
        return (
          <LayoutComponent {...props} {...layoutProps} key={rest.path}>
            <Component {...props} {...componentProps} key={props.location.pathname}>
              {children && <Switch>{children}</Switch>}
            </Component>
          </LayoutComponent>
        );
      }}
    />
  );
}

export default Route;
