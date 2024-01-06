import Component2 from "./Component2.tsx";
import {useState} from "react";
import UserContext from "../context/UserContext.ts";

function Component1():JSX.Element{

    const [user, setUser] = useState<string>("IJSE");

    return (
        <UserContext.Provider value={user}>
            Component 1 :
            <Component2 user={user}/>
        </UserContext.Provider>
    );
}

export default Component1;