import React, { createContext, useContext } from "react"
import Service from "../api/Service";

export type GlobalContentProps = {
    setComponet?:(c: any) => void;
    componet?:any;

    service?:Service;
    setService?:(arg: Service) => void;
  }

const ActionContext = createContext<GlobalContentProps>({ });

export const useGlobalContext = () => useContext(ActionContext);
export default ActionContext;