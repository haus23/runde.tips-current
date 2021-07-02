import React, { FC } from "react";

import { AppLink, AppLinkProps } from "../../../common/components/AppLink";

export const TopLink: FC<AppLinkProps> = ({to, children}) => {
  return (
    <AppLink
      className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
      activeClass="border-indigo-500 text-gray-900"
      inactiveClass="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
    to={to}>{children}</AppLink>
  )
};
