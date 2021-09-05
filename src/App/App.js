import './App.css';
import routesConfig from "../routes/routesConfig";
import Header from "../components/Header/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {GenreBadge} from "../components/GenreBadge/GenreBadge";
const App = () =>{
  return (

      <div>
          <BrowserRouter>
              <div className={'wrapper'}>
          <Header/>
              <Switch>
              {routesConfig.map((route,index)=>(
                  <Route key={index} path={route.path} exact={route.exact} component={route.component}
                  />
              ))}
              </Switch>
              </div>
              {/*<GenreBadge/>*/}
          </BrowserRouter>
      </div>

  )
}
export default App;
