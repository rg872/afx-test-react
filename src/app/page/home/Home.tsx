import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/state";
import { getCatFact } from "../../state/cats/cats.slice";

const Home = () => {
  const dispatch = useAppDispatch();
  const fact = useAppSelector((state) => state.cat.fact);
  const isLoading = useAppSelector((state) => state.ui.isPageLoading);

  const fetchFact = () => {
    dispatch(getCatFact());
  };

  return (
    <main>
      <h1>Welcome</h1>
      <Button variant="outlined" onClick={() => fetchFact()}>
        Text
      </Button>
      {isLoading && (
        <div style={{ width: "100%", height: "100vh", background: "blue" }}>
          LOADING
        </div>
      )}
      {fact?.text}
    </main>
  );
};

export default Home;
