import {useRoutes , BrowserRouter} from "react-router-dom";


import Form from "../Form/index";
import Log from "../Log/index";
import Navbar from "../../Components/Navbar";
import './App.css'
import Home from "../Home/index";


const AppRoutes = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let routes = useRoutes([
        { path: '/', element: <Home />},
        { path: '/form', element: <Form />},
        { path: '/logs', element: <Log />}
    ])

    return routes;
}
const App = () => {


  return (

      <>
          <BrowserRouter>
              <AppRoutes />
              <Navbar />
          </BrowserRouter>
      </>
  )
}

export default App
