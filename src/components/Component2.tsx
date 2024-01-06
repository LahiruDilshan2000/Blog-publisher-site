import Component3 from "./Component3.tsx";


interface Props{
    user?:string
}
function Component2(props:Props):JSX.Element{

    return (
        <div>
            Component 2 : {props.user}
            <Component3 />
        </div>
    );
}

export default Component2;
