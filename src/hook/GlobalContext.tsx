import React, { createContext, useContext } from "react"

export type GlobalContentProps = {
    setComponet?:(c: any) => void;
    componet?:any;
  }

const ActionContext = createContext<GlobalContentProps>({ });

export const useGlobalContext = () => useContext(ActionContext);
export default ActionContext;