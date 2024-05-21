import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ImageBanner({ src, alt }) {
    return <img loading="lazy" src={src} alt={alt} className="image-css h-60px object-cover absolute inset-0 size-full"/>;
}

function SignInForm({setIsLogin, setToken}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    
    // const handleSignIn = ()=>{
        //     const user = JSON.parse(localStorage.getItem('user'));
        //     if(user && user.email===email && user.password === password){
            //         navigate('/')
            //     }else{
                //         alert("wrong email or password")
                //     }
                // }
                
                
        const handleSignIn = async (e) => {
                    e.preventDefault();
                const user = {email, password, appType : "music"}
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'projectID': '131zmhaho3db',
                    'accept': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const datas = await response.json();
            if (datas.status === "fail") {
                alert("Wrong email or password");
            }
            else {
                setIsLogin(true)
                setToken(datas.token)
                navigate('/')
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSignIn} className="drop-shadow-sm	 flex flex-col px-9 py-12 mt-6 bg-white rounded-lg border border-solid border-zinc-100 max-md:px-5 max-md:max-w-full">
            <h2 className="text-4xl text-zinc-800 max-md:max-w-full">Sign in</h2>
            <label htmlFor="email" className="mt-7 text-xl text-stone-700 max-md:max-w-full ">Enter Your Email</label>
            
            <input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                onChange={(e)=>setEmail(e.target.value)}
                className="border-2 flex flex-col justify-center px-1.5 py-1.5 mt-1.5 bg-black bg-opacity-0 max-md:max-w-full"
            />
            <label htmlFor="password" className="mt-1.5 text-lg text-neutral-700 max-md:max-w-full ">Enter Your Password</label>
            <input
                id="password"
                type="password"
                placeholder="Enter Your Password"
                onChange={(e)=>setPassword(e.target.value)}
                className="border-2 flex flex-col justify-center px-1.5 py-1 mt-1.5 bg-black bg-opacity-0 max-md:max-w-full" 
            />
            
            <button
                type="submit"
                onClick={handleSignIn}
                className="wflex flex-col justify-center px-1.5 py-1 mt-9 text-lg text-lime-900 whitespace-nowrap  max-md:max-w-full  justify-center items-center px-16 py-4 bg-yellow-400 rounded-lg border border-yellow-400 border-solid"
            >
                    Continue
            </button>
        </form>
    );
}

function FooterImage({ src, alt }) {
    return <img loading="lazy" src={src} alt={alt} className="object-cover absolute inset-0 size-full" />;
}
function SignIn({setIsLogin, setToken}) {




    const navigate = useNavigate();
    const handleOpenRegister = ()=>{
        navigate('/signup')
    }
    
    return (
        <div className="flex flex-col justify-center bg-black bg-opacity-0">
            <section className="flex overflow-hidden relative flex-col items-center px-5 pb-20 w-full min-h-[879px] max-md:max-w-full">
                <div className="flex relative flex-col px-1.5 py-1 max-w-full bg-black bg-opacity-0 w-[533px]">
                    <div className="flex gap-0 self-center text-base whitespace-nowrap text-stone-500">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/13255941677d5831152734d33517c836fd9955d675c80c32a737cb35cba2b520?apiKey=d9edbd9b9779410cb6e09fa7760d29d8&" alt="Amazon Logo" className="h-20 shrink-0 w-full aspect-[2.63]" />
                        <span className="my-auto">.in</span>
                    </div>
                    <SignInForm setIsLogin={setIsLogin} setToken={setToken}/>
                </div>

                <p className="relative mt-9 text-base text-neutral-400">New to Amazon?</p>
                <button onClick={handleOpenRegister}
                type="submit"
                className="w-2/5 items-center	 rounded-lg border  border-solid flex flex-col justify-center px-1.5 py-1 mt-9 text-lg text-lime-900 whitespace-nowrap bg-black bg-opacity-0 max-md:max-w-full"
                >
                    Create your Amazon account
            </button>
            
                <footer className="flex relative flex-col justify-center self-stretch mt-8 mb-11 w-full text-base bg-black bg-opacity-0 text-zinc-500 max-md:mb-10 max-md:max-w-full" >
                    <div className="flex overflow-hidden relative flex-col items-center px-16 pt-12 pb-1.5 w-full min-h-[70px] max-md:px-5 max-md:max-w-full">
                        <div className="flex relative gap-1.5">
                            <p className="flex-auto">1996-2024, Amazon.com, Inc. or its affiliates</p>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    );
}

export default SignIn;