import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";

const MainPage = () => {
  const character = useSelector((state) => state.character.character);

  return (
    <div className="flex flex-row">
      Main
      <LeftSidebar />
    </div>
  );
};
export default MainPage;
