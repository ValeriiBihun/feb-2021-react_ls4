import
{
    Link,
} from "react-router-dom";

export default function User(props) {
    // console.log(props);
    let {item, url} = props;
    // console.log(url);
    return (
        <div>
            {item.id}-
            {item.name}-
            {/*<button>user details</button>*/}
            {/*<Link to={url + '/' + item.id}>- user details</Link>*/}

            <Link to={`${url}/${item.id}`}>- user details</Link></div>
    );
}

