import React from "react";

export const ToastContext = React.createContext({
  show: false,
  message: "",
});
