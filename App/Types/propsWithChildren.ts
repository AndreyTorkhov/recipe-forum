import { ReactNode } from "react";

type ChildrenProps = {
  children: ReactNode;
};

export type PropsWithChildren<T = unknown> = T & ChildrenProps;

export type PropsWithOptionalChildren<T = unknown> = T & Partial<ChildrenProps>;
