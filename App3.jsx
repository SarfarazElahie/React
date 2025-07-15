// USING EVENT LISTENERS INN REACT USING FUNCTIONS - NORMAL , ARROW , AND TAKING PARAMETER IN FUNCTION IN REACT
import { use } from "react"
import Header from "./header"
import Login,  {Profile, UserKey} from "./UserComponent"


  function App(){
    
    function hello(){
      alert('Hello')
    }
    let fruit = ()=>{
      alert('Apple')
    }

    let favFruit = ((name)=>{
      alert(name)
    })
    return(
      <div>
        <button onClick={hello}>Normal func </button>
        <button onClick={fruit}>Arrow func </button>
        <button onClick={()=> favFruit("Mango")}>Arrow func with taking parameters  </button>
      </div>
    )
  }


export default App
