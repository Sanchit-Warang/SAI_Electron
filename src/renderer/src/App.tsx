import Navbar from "./components/ui/Navbar";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="mx-10">
        <Outlet />
      </div>
    </>
  );
};

export default App;
