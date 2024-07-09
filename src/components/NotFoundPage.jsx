import {Link} from "react-router-dom";
export default function NotFound(){

    return(
        <>
            <div>
                <p>Error. Page not available.</p>
                <Link to="/">Back to Home</Link>
            </div>
        </>
    );
};