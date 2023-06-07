import { BrowserRouter, Routes, Link, Route, useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";

const style = {
  margin: '1rem', 
  padding: '0.5rem', 
  border: '2px solid black',
  display: 'flex',
  justifyContent: 'center',

}

function Home() {
  return <h2 style={{...style, borderColor: 'red'}}>Home Screen</h2>
}

function User(props) {
  const {id} = useParams();
  // const [data, setData] = useState();
  useEffect(() => {
      // The following is "pseudocode" data fetching, using the id pulled from the URL:
      // axios.get(`acme-api/users/${id}`).then(res => setData(res.data))
  },[id])
  return <h2 style={{...style, borderColor: 'green'}}>User details for {id} </h2>
}


export default function App() {

  return (
    <BrowserRouter>
      <h1>React Router UseParms</h1>
      <nav>
        <Link to="/">Home</Link>&nbsp;&nbsp;
        {[1, 2, 3, 4].map((int) =><><Link to={`user/${int}`}> User{int}</Link>&nbsp;</>)} 
      </nav>
      <Routes> 
        <Route path="/" element={<Home />}/> 
        <Route path="user/:id" element={<User />}/> 
      </Routes> 
    </BrowserRouter>
  );
}
