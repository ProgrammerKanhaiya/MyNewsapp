import Navbar from './Components/Navbar'
import News from "./Components/News";
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";


const  App = ()=>{
  let pageSize=9;
  let country='in';
  
  const [progress, setState] = useState({progress:0})
 
  const setProgress=(p)=>{
    setState({progress:p})
  }
   

  

    return(
      <>
        <Router>
        
          <LoadingBar
            color='red'
            height={2}
            progress={progress}
          />
         
          <Navbar/>
          <br/>
          <Switch>
            <Route exact path="/">
              < News key="1" setProgress={setProgress} pageSize={pageSize} country={country} category="general"/>
            </Route>
            <Route exact path="/business">
              < News setProgress={setProgress} key="business" setProgress={setProgress} pageSize={pageSize} country={country} category="business"/>
            </Route>
            <Route exact path="/entertainment">
              < News setProgress={setProgress} key="3" pageSize={pageSize} country={country} category="entertainment"/>
            </Route>
            <Route exact path="/health">
              < News setProgress={setProgress} key="4" pageSize={pageSize} country={country} category="health"/>
            </Route>
            <Route exact path="/science">
              < News setProgress={setProgress} key="5" pageSize={pageSize} country={country} category="science"/>
            </Route>
            <Route exact path="/sports">
              < News setProgress={setProgress} key="6" pageSize={pageSize} country={country} category="sports"/>
            </Route>
            <Route exact path="/technology">
              < News setProgress={setProgress} key="technology" pageSize={pageSize} country={country} category="technology"/>
            </Route>
          </Switch>
        </Router>
      </>
     
    )


}
export default App





