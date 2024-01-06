import React, {useEffect, useState} from "react";
import * as ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Input from "../components/input/input.tsx";
import Swal from "sweetalert2";
import axios from "axios";
import Cookies from "js-cookie"
import {useNavigate, useLocation} from "react-router-dom";

const Editor = ():JSX.Element => {

    const location = useLocation();
    const article = location?.state?.article;

    const [title, setTitle] = useState<string>(article ? article.title : "");
    const [content, setContent] = useState<string>(article ? article.description : "");


    const navigate = useNavigate();

    useEffect( () => {

        const token = Cookies.get('token');

        if (!token){
            navigate('/login');
        }
    }, []);


    const handleTitle = (e: any, type:string): void => {
        setTitle(e.target.value);
        console.log(title)
    }

    const handleEditor = (html: string): void => {

       // this.setState({value: html})
        setContent(html);
    }

    const handleValidation = () => {

        if (title && content){
            handleCreateOrUpdateArticle();
        }else {
            Swal.fire({
                title: "Invalid inputs",
                text: "Please enter the valid input",
                icon: "error"
            });
        }
    }


    const handleCreateOrUpdateArticle = () => {

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Cookies.get('token')
            }
        };

        let data = JSON.stringify(article ? {
            id:article._id,
            title:title,
            description: content
            }:{
            title:title,
            description: content
        })

        if (article){
            axios.put('http://localhost:8080/article', data, config)
                .then(res => {
                    navigate('/');
                    Swal.fire({
                        title: "Success !",
                        text: "Article update successfully!",
                        icon: "success"
                    });
                    navigate('/my-article');
                })
                .catch(err => {
                    console.log(err)
                    Swal.fire({
                        title: 'Error!',
                        text: 'Something went wrong',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
                });
        }else {


            axios.post('http://localhost:8080/article', data, config)
                .then(res => {

                    //navigate('/');
                    Swal.fire({
                        title: "Success !",
                        text: "Article create successfully!",
                        icon: "success"
                    });
                    navigate('/my-article');
                })
                .catch(err => {
                    console.log(err)
                    Swal.fire({
                        title: 'Error!',
                        text: 'Something went wrong',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
                });
        }

    }


        return (
            <section className={'my-10 mx-20'}>
                <div className={"w-full flex justify-end"}>
                    <button  className={"second-btn"}>Clear</button>
                    <button onClick={handleValidation} className={"main-btn"}>{
                        article ? "Update" : "Save"
                    }
                    </button>
                </div>
                <Input
                    type={'text'}
                    name={'title'}
                    label={'Title'}
                    placeholder={'Enter the title'}
                    optional={false}
                    value={title}
                    callBack={handleTitle}/>

                <div className={'my-5'}>
                    <ReactQuill theme="snow" value={content} onChange={handleEditor}
                                className={'min-h-[40vh]'}/>
                </div>
            </section>
        );
}

export default Editor;