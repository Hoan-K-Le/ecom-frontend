"use client";

import { store } from ".";
import { Provider as ReduxProviders } from "react-redux";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <ReduxProviders store={store}>{children}</ReduxProviders>;
}
