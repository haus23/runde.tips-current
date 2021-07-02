import React, { FC } from "react";
import { Link, LinkProps, useRouteMatch } from "react-router-dom";

export interface AppLinkProps extends LinkProps {
  activeClass?: string;
  inactiveClass?: string;
}

export const AppLink: FC<AppLinkProps> = ({ to, children, className, activeClass, inactiveClass  }) => {

  const match = useRouteMatch({ path: to.toString() });
  const classes = [className, match?.isExact ? activeClass : inactiveClass].join(' ');

  return (
    <Link className={classes} to={to}>{children}</Link>
  );
}
