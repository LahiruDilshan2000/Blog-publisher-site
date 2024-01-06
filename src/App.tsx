import React from "react";
import './App.css'

import Header from "./components/layout/header.tsx";
import Footer from "./components/layout/footer.tsx";
import Home from "./views/home";
import Login from "./views/login.tsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "./views/signup.tsx";
import Editor from "./views/editor.tsx";
import MyArticle from "./views/my-article.tsx";
import Article from "./views/article.tsx";
import Component1 from "./components/Component1.tsx";

interface Props{
}
interface States{
    count:number;
}
class App extends React.Component<Props, States>{



    /*state = {
      count: 0,
      visible: true
    };

    up = (): void => {
        this.setState({count: this.state.count + 1});
    }
    down = (): void => {
        this.setState({count: this.state.count - 1});
    }

    update = (type:string): void => {
        switch (type){
            case 'UP':
                this.setState({count: this.state.count + 1});
                break;
            default:
                this.setState({count: this.state.count - 1});
                break;
        }
    }
    render(){

        return(
            <div className={"m-5"}>

                <button className={"inline bg-green-600 px-5"} onClick={() => this.update('UP')}>+</button>
                <div className={"inline mx-5 font-bold"}>{this.state.count}</div>
                <button className={"inline bg-red-600 px-5"} onClick={() => this.update('DOWN')}>-</button>

            </div>
        );
    }*/



    state = {
        count: 0,
    };

    up = (): void => {
        this.setState({count: this.state.count + 1});
    }

    render():React.ReactElement<any, string>{
        return (
            <div>

                <BrowserRouter>
                    <Header/>
                    <Routes>
                        {/*<Route path={'/'} element={<Component1/>}/>*/}
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                        <Route path={'/signup'} element={<Signup/>}/>
                        <Route path={'/editor'} element={<Editor/>}/>
                        <Route path={'/my-article'} element={<MyArticle/>}/>
                        <Route path={'/article'} element={<Article/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>

                {/*<div className={'text-center m-5'}>
                    <div className={'text-2xl font-bold'}>{this.state.count}</div>
                    <br/>
                    <button className={'bg-green-600 text-white p-5'} onClick={this.up}>Click</button>
                </div>*/}




                {/*{
                    this.state.count > 0 ? null : <Card title={"React"}/>
                }*/}

            </div>
        );
    }
}

export default App
