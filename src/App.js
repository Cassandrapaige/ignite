import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./redux/games/games.actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  });

  return (
    <div className='App'>
      <h1>Hello world</h1>
    </div>
  );
};

export default App;
