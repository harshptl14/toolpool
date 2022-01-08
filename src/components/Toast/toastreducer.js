import { useReducer } from "react";
import { ToastContext } from "./toastcontext";

const SHOW = "SHOW";
const HIDE = "HIDE";

const initialState = {
  show: false,
  message: "",
};

const toastReducer = (state, action) => {
  switch (action.type) {
    case SHOW:
      return {
        ...state,
        show: true,
        message: action.message,
      };
    case HIDE:
      return {
        ...state,
        show: false,
        message: "",
      };
    default:
      return {
        ...state,
        show: false,
        message: "",
      };
  }
};

const ToastContextProvider = (props) => {
  const [state, dispatch] = useReducer(toastReducer, initialState);

  return (
    <ToastContext.Provider value={[state, dispatch]}>
      {props.children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
