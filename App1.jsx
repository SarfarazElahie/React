// BASICS OF REACT MAKING COMPONENTS , VARIABLES USING THEM
import Header from "./header"
import Login,  {Profile, UserKey} from "./UserComponent"


 function App(){
  function hello(){
    alert("Hello")
  }

  return(
    <div>
      <Header/> 
       <h1>Heading 1 </h1>
       <Fruit />
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum doloremque consequatur, quos cum iusto consequuntur a nam aliquid animi possimus dolore ipsa rem, numquam earum, quisquam voluptatibus iure error deleniti.</p>

       <button onClick={hello}>Click me </button>

       <Color />

       <Login />

       <Profile />

       <h2>{UserKey}</h2>
    </div>
   
  )
}

// component 1
function Fruit (){
  return(
    <div>
      <h2>This is a fruit </h2>
    </div>
  )
}

// component 2
function Color(){
  return(
    <div>
      <h3>This is a colors "Red"</h3>
    </div>
  )
}

// function 1 
function sum(){
  return 10+5;
}

export default App
