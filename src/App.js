import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import VideoSearchPage from "./components/VideoSearchPage";
import WatachPage from "./components/WatachPage";
import store from "./utils/store";


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<MainContainer/>
      },
      {
        path:'watch',
        element:<WatachPage/>
      },
      {
        path:'results',
        element:<VideoSearchPage/>
      },

    ]
  }
])
function App() {
  return (
    <Provider store={store}>
      <div>

        <RouterProvider router={appRouter} />
        {/* <Body /> */}
      </div>
    </Provider>
  );
}

export default App;
