import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./state/store";

import Home from "./page/home/Home";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Home />
    </Provider>
  );
}

export default App;
