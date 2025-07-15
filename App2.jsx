// USING OF VARIABLES , OBJECTS, ARRAYS ,FUNCTIONS, IMAGES IN REACT 
import { use } from "react"
import Header from "./header"
import Login,  {Profile, UserKey} from "./UserComponent"


  function App(){

    // Making varables 
    const name = "Faraz Shah"

    // Making Functions 
    function fruit(){
      return "Apple"
    }

    // Making objects 
    const userInfo = {
      name: 'faraz',
      age: 20,
      email: 'sarfarazelahie@gmail.com'
    }

    // Making Array
    let months = ["Jan","Feb","Mar","Apr","May"]

    //Making variables for img 
    let path = "https://images.pexels.com/photos/32335567/pexels-photo-32335567.jpeg?_gl=1*hnelu3*_ga*OTIxNjUxNjc3LjE3NTAzMTAzMjM.*_ga_8JE65Q40S6*czE3NTI1NzA1NDkkbzEyJGcxJHQxNzUyNTcwNTY2JGo0MyRsMCRoMA.."

    return(
      <div>
        <h1 id="jsx">JSX with Curly Braces</h1>   
        <h3>Name : {name?name:"user not found"}</h3>
        <h3>{fruit()}</h3>
        <h3>User Email: {userInfo.email}</h3>
        <h3>User Age: {userInfo.age}</h3>
        <h3>Months array : {months}</h3>
        <h3>Months array first Month : {months[0]}</h3>

        <h2>Image :</h2>
        <img src={path} alt="" width={400} />

        <h2><input type="text" placeholder={userInfo.name} /></h2>
      </div>
    )   
  }


export default App
