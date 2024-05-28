import { useRouteError } from "react-router-dom"

export default function Error(){
    let err = useRouteError();
    console.log(err);
    return(
        <div>
            <h2>Opps ! </h2>
            <h3>Some Error occured</h3>
            <h1>{err.status } &nbsp;{err.statusText}</h1>
        </div>
    )
}