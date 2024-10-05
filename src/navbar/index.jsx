// import { useContext } from "react";
// import { MovieContext } from "../context/movieContext";

import { useSelector } from "react-redux";

const Navbar = () => {
  const data = useSelector((state) => state.todo.data);

  // const [movies] = useContext(MovieContext);
  return (
    <div className="bg-[#43978d] flex justify-between items-center px-[30px] h-[80px]">
      <h3>O'zbek Kino</h3>
      <h3>Kino soni: {data.length}</h3>
    </div>
  );
};

export default Navbar;
