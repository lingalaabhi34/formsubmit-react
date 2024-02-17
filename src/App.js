import { useState } from "react";
import "./style.css"
const App=()=>{

  const [one,setone] = useState("");
const [two,settwo] = useState("");
const [output,setoutput] =useState("");

 
 const password=(e)=>{
   setone(e.target.value);
 }
 const confirmpassword=(e)=>{
  settwo(e.target.value);
 }
 const result=(e)=>{
  e.preventDefault();
 if(one.length-1 >= 8 && two.length-1 >= 8){
  const three=one.toLowerCase();
  const four = two.toLowerCase();
  if(three.includes(four)){
    alert("form submitted successfully")
  }
  else{
    alert("can’t submit the form | password and confirm password must be same")
  }
 }
 else{
  alert("password input must be at least 8 characters long")
 }
 }
  return (
    <div className="container">
      <form onSubmit={result}>
        <label for="gmail">Enter your Gmail : </label>
      <input type="email" required id="gmail"></input>
      <label for="password">Password : </label>
      <input type="password" onChange={password} required id="password"></input>
      <label for="consfirmpassword">Confirm Password : </label>
      <input type="password" onChange={confirmpassword} required id="consfirmpassword"></input>
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default App;
