import  {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Input from "../components/input/input.tsx";
import * as validator from '../util/validator.ts'
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie"

/*interface State{
    email:string;
    password:string;
    errorMsg:string;
}*/

function Login (): JSX.Element{

    // class component state

    /*state = {
        email: '',
        password: '',
        errorMsg: ''
    }*/

    // function component state

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();

   /* const handleEmail = (e: object): void => {
        console.log('email ' +  e.target.value)
    }

    const handlePassword = (e: object):void  => {
        console.log('password ' + e.target.value);
    }*/

    const handleInput = (e:any, type:string):void => {

        switch (type){
            case 'Email':
                //set class component state property
                // this.setState({...this.state, email:e.target.value})

                //set function component sate property
                setEmail(e.target.value)
                break;
            case 'Password':
                //set class component state property
                // this.setState({...this.state, password:e.target.value})

                //set function component state property
                setPassword(e.target.value)
                break;
        }
    }

    const handleValidate = () : void => {

        let isValidInput:boolean = true;
        let errorMsg:string = '';


       if (!validator.validateEmail(email)){

            isValidInput = false;
            errorMsg = "> Invalid Email";
        }

        if (!validator.validatePassword(password)){

            isValidInput = false;
            errorMsg = errorMsg + " > Invalid Password";
        }

        if (isValidInput){

            setErrorMsg('');
            handleLogin();

        }else {

            //this.setState({...this.state, errorMsg: errorMsg});
            setErrorMsg(errorMsg);
        }

    }

    const handleLogin = () => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        let data = JSON.stringify({
            email: email,
            password: password
        })

        axios.post('http://localhost:8080/user/auth', data, config)
            .then(res => {

                Cookies.set('token', res.data.data.accessToken, { expires: 7 })
                Cookies.set('user', JSON.stringify(res.data.data.user), { expires: 7 })
                navigate('/');
                console.log(res.data.data.user)
                /*Swal.fire({
                    title: "Good job!",
                    text: "Login successfully!",
                    icon: "success"
                });*/
            })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    title: 'Error!',
                    text: err,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            });
    }


        return (

            <section className={'flex justify-center items-center'}>
                <div className={'flex flex-col items-center justify-center w-[400px] h-[520px]  border-[1px] border-gray-200 m-5 px-10'}>
                    <img src={'http://logodix.com/logo/1597040.png'} title={'logo'} alt={'logo'}
                         className={'w-[100px]'}/>

                    <Input
                        type={'email'}
                        name={'Email'}
                        label={'Email'}
                        placeholder={'email'}
                        optional={false}
                        callBack={handleInput}/>

                    <Input
                        type={'password'}
                        name={'Password'}
                        label={'Password'}
                        placeholder={'password'}
                        optional={false}
                        callBack={handleInput}/>
                    {
                       /* this.state.errorMsg ?
                            <div className={'bg-red-100 text-center p-2 m-2'}></div>: null*/
                        errorMsg &&
                            <div className={'bg-red-100 text-center text-gray-500 p-2 m-4 w-full'}>{errorMsg}</div>

                    }

                    <button type={'button'}
                            onClick={handleValidate}
                            className={"main-btn mt-2"}>Log in</button>

                    <div className={'text-gray-400 my-1'}>or</div>
                    <div className={'text-gray-400 text-[14px]'}>Do not have an account ?
                        <span className={'text-blue-700 underline'}><Link to={'/signup'}> Sign ip here</Link></span>
                    </div>

                </div>
            </section>
        );

}

export default Login;