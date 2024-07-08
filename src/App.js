import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utility/store";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainContainer } from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResult from "./components/SearchResult";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/search",
        element: <SearchResult />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
