
import {useEffect,useState} from "react";
import User from "../user/User";
import UserDetails from "../user-details/UserDetails";
import {Route,Switch} from "react-router-dom";

export default function Users(props) {
   // console.log(props);
    let{match:{url}}=props;
    // console.log(url);

    let [users,setUsers]=useState([]);
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value=>value.json())
            .then(value=>{
                setUsers([...value]);
            });
    },[]);
    return (
       <div>
           Users
           {
               users.map(value => <User key={value.id} item={value} url={url}/>)
           }
           <Switch>
               <Route path={'/users/:id'}component={UserDetails}/>
           </Switch>
           </div>
    );
}

