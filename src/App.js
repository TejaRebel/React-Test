import "./App.css"
// import data from "./data";
import users from "./users";


const App = () => { 
  return <Users />
}

// className = "comments"
// main - body name = "comments-container"


function Users() {
  return(
    <main className="comments">
      {users.map((userDetails) => {
        const {id, name, username, email, address, phone, company, website}= userDetails;
        return (
          <main key={id} className="comments-container">
             <div>
              <h1>{name}</h1>
             <h2>{username}</h2>
             <h3>{email}</h3>
             </div>
             <div>
              <h4>{address.street}</h4>
              <h4>{phone}</h4>
              <h4>{company.name}</h4>
              <h4>{website}</h4>
             </div>
          </main>
        )
      })}
    </main>
  )
}

export default App;
