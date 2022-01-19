// import { useParams } from "react-router-dom";
// import { TOOLS } from "../../static/utils/toolComponentsList";
// import ReactMarkdown from "react-markdown";
// import PageTitle from "../PageTitle";
// import { useEffect } from "react";
// import Toast from "../Toast/toast";
// import { ToastContext } from "../Toast/toastcontext";
// import { useContext } from "react";

// // A wrapper component to display various tools dynamically according to their ID (from URL)
// const ToolWrapper = () => {
//   const [state, dispatch] = useContext(ToastContext);

//   //fetch toolId from URL params
//   const { category, toolName } = useParams();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   console.log("Tool name : ", toolName);
//   console.log("Tool category : ", category);
//   return (
//       <div>
//         <PageTitle id="title" size="small">
//           {TOOLS[category][toolName]["title"]}
//         </PageTitle>
//         <br></br>
//         {TOOLS[category][toolName]["component"]}
//         {/* Error Toast */}
//         {state.show && <Toast></Toast>}
//         {/* Markdown component to display description */}
//         <div style={{ marginTop: "50px" }}>
//           <ReactMarkdown children={TOOLS[category][toolName]["readme"] ?? ``} />
//         </div>
//       </div>
//   );
// };

// export default ToolWrapper;
