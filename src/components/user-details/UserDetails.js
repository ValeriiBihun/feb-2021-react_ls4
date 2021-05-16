
//import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
export default function UserDetails(props) {
   //  let params=useParams();
   // console.log(params);
    let{match:{params:{id}}}=props;
    // console.log(id);
    let[user,setUser]=useState([null]);
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users'+id)
            .then(value=>value.json())
            .then(value=>{
                // setUser([...value]);
                 setUser(value);
            });
    },[id]);
    return (
        <div>

            {  user&&<h2>{user.id}-{user.name}-{user.email}</h2>}
            {/*{JSON.stringify(user)}*/}

        </div>
    );
}