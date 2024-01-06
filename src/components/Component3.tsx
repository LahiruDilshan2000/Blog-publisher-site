import {useContext} from "react";
import UserContext from "../context/UserContext.ts";

function Component3():JSX.Element{

    const user = useContext(UserContext);

    return (
        <div>
            Component 2 : {user}
        </div>
    );
}

export default Component3;