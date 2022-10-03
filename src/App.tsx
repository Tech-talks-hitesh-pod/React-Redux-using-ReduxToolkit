import * as React from "react";
import Courses from "./component/course";
import { Disney } from "./component/disneyChar";
import Searchbox from "./component/search";
import Scrollable_courses from "./container/scrollable_courses";
import { Counter } from "./component/counter";
import './index.css'

/*class App extends React.Component <Courses,Courses>{
    render(){
        return(
            <div>
                <Scrollable_courses id={0} description={""} title={""}/>
            </div>
        )
    }
}*/

function App() {
    return (
        <div className="container">
            {/* <h1>Testing</h1>
            <Scrollable_courses {...{"props":"pro"}} />
            <Searchbox></Searchbox> */}
            <br>
            </br>
            <Counter></Counter>
            <br>
            </br>
            <Disney/>
        </div>
    )
  }

export default App
//export const App = ({num}: AppProps) =>  <h1> New React {num}</h1>;