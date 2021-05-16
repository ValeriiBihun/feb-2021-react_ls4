// import './App.css';
import Home from './components/home/Home'
import Users from './components/users/Users'
import Posts from "./components/posts/Posts";
import
{
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Link to={'/'}>home page</Link>
                <br/>
                <Link to={'/users'}>users page</Link>
                <br/>
                <Link to={'/posts'}>posts page</Link>
                <br/>
                <hr/>
                <Switch>
                    {/*1- варіант*/}
                    <Route exact path={'/'} >
                    <Home/>
                </Route>
                {/*2- варіант*/}
                <Route path={'/users'} component={Users}/>
                {/*3- варіант*/}
                <Route path={'/posts'} render={(props) =>{
                    // console.log(props);
                 return <Posts/>;
                }}/>
                <hr/>
            </Switch>
        </div>
</Router>
);
}

export default App;
