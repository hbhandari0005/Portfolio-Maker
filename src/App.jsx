import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Component/form";
import Port from "./Component/Port";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import NotFound from "./Component/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/port" element={<Port />} />
        <Route path="/:id" element={<NotFound/>}/>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        toastClassName="toast-class"
        closeOnClick
        pauseOnHover
        draggable
        style={{
          top: "1rem",
          right: "1rem",
          width: "100%",
          maxWidth: "100vw",
          padding: "0 1rem",
          boxSizing: "border-box",
        }}
      />
    </>
  );
}

export default App;
