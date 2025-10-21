import { useSelector } from "react-redux";
import LeftSidebar from "../components/LeftSidebar";

const MainPage = () => {
  return (
    <div className="flex flex-row">
      <LeftSidebar />
      Main
    </div>
  );
};
export default MainPage;
