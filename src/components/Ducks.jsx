import NavBar from "./NavBar";
import DuckList from "./DuckList";

function Ducks({ setIsLoggedIn }) {
  return (
    <>
      <NavBar setIsLoggedIn={setIsLoggedIn} />
      <DuckList />
    </>
  );
}

export default Ducks;
