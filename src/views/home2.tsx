import React from "react";
import Card from "../components/card/card";
import axios from 'axios';

interface data{
    id:number;
    date:string;
    title:string;
    body:string;
}

/*const dataArray:data[] = [
    {
        id:1,
        date:'2022-08-12',
        title:'ijse',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate fugiat harum laudantium, officia possimus! Accusantium dignissimos facere fuga illo mollitia nemo non officiis, provident quisquam vitae! Exercitationem, fugiat, quo!'
    },
    {
        id:2,
        date:'2022-09-28',
        title:'JavaScript',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate fugiat harum laudantium, officia possimus! Accusantium dignissimos facere fuga illo mollitia nemo non officiis, provident quisquam vitae! Exercitationem, fugiat, quo!'
    },
    {
        id:3,
        date:'2022-10-05',
        title:'TypeScript',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate fugiat harum laudantium, officia possimus! Accusantium dignissimos facere fuga illo mollitia nemo non officiis, provident quisquam vitae! Exercitationem, fugiat, quo!'
    },
    {
        id:4,
        date:'2022-10-12',
        title:'Node Js',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate fugiat harum laudantium, officia possimus! Accusantium dignissimos facere fuga illo mollitia nemo non officiis, provident quisquam vitae! Exercitationem, fugiat, quo!'
    },
    {
        id:5,
        date:'2022-10-13',
        title:'Node Js',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate fugiat harum laudantium, officia possimus! Accusantium dignissimos facere fuga illo mollitia nemo non officiis, provident quisquam vitae! Exercitationem, fugiat, quo!'
    },
    {
        id:6,
        date:'2022-11-15',
        title:'Node Js',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate fugiat harum laudantium, officia possimus! Accusantium dignissimos facere fuga illo mollitia nemo non officiis, provident quisquam vitae! Exercitationem, fugiat, quo!'
    },
    {
        id:7,
        date:'2022-11-16',
        title:'Node Js',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate fugiat harum laudantium, officia possimus! Accusantium dignissimos facere fuga illo mollitia nemo non officiis, provident quisquam vitae! Exercitationem, fugiat, quo!'
    }
    ,{
        id:8,
        date:'2022-11-02',
        title:'Node Js',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate fugiat harum laudantium, officia possimus! Accusantium dignissimos facere fuga illo mollitia nemo non officiis, provident quisquam vitae! Exercitationem, fugiat, quo!'
    },
    {
        id:9,
        date:'2022-11-16',
        title:'Node Js',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate fugiat harum laudantium, officia possimus! Accusantium dignissimos facere fuga illo mollitia nemo non officiis, provident quisquam vitae! Exercitationem, fugiat, quo!'
    },
    {
        id:10,
        date:'2022-12-22',
        title:'Node Js',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate fugiat harum laudantium, officia possimus! Accusantium dignissimos facere fuga illo mollitia nemo non officiis, provident quisquam vitae! Exercitationem, fugiat, quo!'
    }
];*/

class Home extends React.Component<any, any>{

    state ={
        data:[]
    }

    fetchData = ():void => {

        /*using fetch*/

        /*fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(result => {
                this.setState({data: result})
            }).catch(err => {
            console.log(err)
        });*/

        /*using axios*/

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {

                this.setState({data:response.data})
                console.log(response);

            })
            .catch(err => {

                console.log(err) ;

            });
    }

    componentDidMount():void {
        this.fetchData();
    }

    render():React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null |undefined  {
        return(
            <section>

                <div className={"grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-fit relative m-auto"}>
                    {
                        this.state.data.map((value:data) => {
                            return <Card title={value.title} content={value.body}/>
                        })
                    }
                </div>
            </section>
        );
    }
}

export default Home;