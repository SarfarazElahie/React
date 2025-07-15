// MAKING EXTERNAL FILE AND USING IN APP COMPONENT
function Login(){
    const UserName = "Sarfaraz Elahie"
  return(
    <div>
     <h1>Login User</h1>
     <h2>User name : {UserName}</h2>
    </div>
   
  )
}

export function Profile(){
    const profileName = "faraz21217"
    return(
        <div>
            <h3>Profile : {profileName} </h3>
        </div>
    )
}

export const UserKey = "12345678" 

export default Login
