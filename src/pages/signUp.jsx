import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";




function ImageBanner({ src, alt }) {
    return <img loading="lazy" src={src} alt={alt} className="image-css h-60px object-cover absolute inset-0 size-full" />;
}

function SignInForm({setToken}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePass, setRePass] = useState("");
    const navigate = useNavigate();



    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!name || !email || !password || !rePass) {
            alert('All fields are required');
            return;
        }
        if (!email.includes('@')) {
            alert('Email must have "@"');
            return;
        }
        if (password.length < 6 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[!@#$%^&*()_]/.test(password)) {
            alert('Password must be at least 6 characters long and include both lower and uppercase letters and symbols');
            return;
        }
        if (password !== rePass) {
            alert('Passwords do not match');
            return;
        }
    }

    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { email, password, name, appType : "music" };
            try {
                const response = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'projectID': '131zmhaho3db',
                        'accept': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                });
                const datas = await response.json();
                if (datas.status === "fail") {
                    alert("email already exists.")
                }
                else {
                    setToken(datas.token)
                    navigate('/signin')
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

    

    return (
        <form className="drop-shadow-sm	 flex flex-col px-9 py-12 mt-6 bg-white rounded-lg border border-solid border-zinc-100 max-md:px-5 max-md:max-w-full"
            onSubmit={handleSubmit} >
            <h2 className="text-4xl text-zinc-800 max-md:max-w-full">Create account</h2>
            <label htmlFor="name" className="mt-7 text-xl text-stone-700 max-md:max-w-full ">Your name</label>

            <input
                id="name"
                type="name"
                placeholder="First and last name"
                value={name}

                className="border-2 flex flex-col justify-center px-1.5 py-1.5 mt-1.5 bg-black bg-opacity-0 max-md:max-w-full"
                onChange={(e) => setName(e.target.value)}

            />



            <label htmlFor="email" className="mt-1.5 text-lg text-neutral-700 max-md:max-w-full ">Email</label>
            <input
                id="email"
                type="email"

                onChange={(e) => setEmail(e.target.value)}
                className="border-2 flex flex-col justify-center px-1.5 py-1 mt-1.5 bg-black bg-opacity-0 max-md:max-w-full"
            />

            <label htmlFor="password" className="mt-1.5 text-lg text-neutral-700 max-md:max-w-full ">Password</label>
            <input
                id="password"
                type="password"
                placeholder="Atleast 6 characters"
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 flex flex-col justify-center px-1.5 py-1 mt-1.5 bg-black bg-opacity-0 max-md:max-w-full"
            />


            <label htmlFor="password" className="mt-1.5 text-lg text-neutral-700 max-md:max-w-full ">Re-enter password</label>
            <input
                id="password"
                type="password"
                onChange={(e) => setRePass(e.target.value)}
                className="border-2 flex flex-col justify-center px-1.5 py-1 mt-1.5 bg-black bg-opacity-0 max-md:max-w-full"
            />

            <button
                type="submit"
                className="flex flex-col justify-center px-1.5 py-1 mt-9 text-lg text-lime-900 whitespace-nowrap  max-md:max-w-full  justify-center items-center px-16 py-4 bg-yellow-400 rounded-lg border border-yellow-400 border-solid"
            >
                Create your Amazon account

            </button>



            <br></br>
            <div>
                Already have an account?  <Link to="/signin" className="text-slate-500">Sign In</Link>
            </div>
            

        </form>
    );
}
function FooterImage({ src, alt }) {
    return <img loading="lazy" src={src} alt={alt} className="object-cover absolute inset-0 size-full" />;
}

function SignIn({setToken}) {
    
    return (
        <div className="flex flex-col justify-center bg-black bg-opacity-0">
            <section className="flex overflow-hidden relative flex-col items-center px-5 pb-20 w-full min-h-[879px] max-md:max-w-full">
                {/* <ImageBanner src="https://cdn.builder.io/api/v1/image/assets/TEMP/da8f405278c7e2cec4df0b8e47e164f9aaaa6d9e1af1312507d0fd6d77644f60?apiKey=d9edbd9b9779410cb6e09fa7760d29d8&" alt="Background Banner" /> */}
                <div className="flex relative flex-col px-1.5 py-1 max-w-full bg-black bg-opacity-0 w-[533px]">
                    <div className="flex gap-0 self-center text-base whitespace-nowrap text-stone-500">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/13255941677d5831152734d33517c836fd9955d675c80c32a737cb35cba2b520?apiKey=d9edbd9b9779410cb6e09fa7760d29d8&" alt="Amazon Logo" className="h-20 shrink-0 w-full aspect-[2.63]" />
                        <span className="my-auto">.in</span>
                    </div>
                    <SignInForm setToken={setToken}/>
                </div>



            </section>
        </div>
    );
}

export default SignIn;