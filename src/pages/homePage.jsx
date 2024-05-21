import * as React from "react";
import { useNavigate } from "react-router-dom";




const HomePage = ({ isLogin, setIsLogin }) => {

    const [trending, setTrending] = React.useState([]);
    const [ top20 , setTop20] = React.useState([]);
    const [ top50, setTop50] = React.useState([]);
    const [evergreen, setEvergreen] = React.useState([]);
    const [happy, setHappy] = React.useState([]);
    const [romantic, setRomantic] = React.useState([]);
    const [excited, setExcited] = React.useState([]);
    const [sad, setSad] = React.useState([]);





    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/signin')
    }

    const fetchTrendingSong = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?featured=Trending%20songs', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'f104bi07c490'
                }
            });
            const data = await response.json();
            console.log('setTrending', data)
            setTrending(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }

    const fetchTop20 = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?featured=Top 20 of this week', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'f104bi07c490'
                }
            });
            const data = await response.json();
            console.log('setTop20', data)
            setTop20(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }



    const fetchTop50 = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?featured=Top 50 of this month', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'f104bi07c490'
                }
            });
            const data = await response.json();
            console.log('setTop50', data)
            setTop50(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }





    const fetchEvergreen = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?featured=Evergreen melodies', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'f104bi07c490'
                }
            });
            const data = await response.json();
            console.log('setEvergreen', data)
            setEvergreen(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }





    const fetchHappy = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?mood=happy', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'f104bi07c490'
                }
            });
            const data = await response.json();
            console.log('setHappy', data)
            setHappy(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }


    const fetchRomantic = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?mood=romantic', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'f104bi07c490'
                }
            });
            const data = await response.json();
            console.log('setRomantic', data)
            setRomantic(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }



    const fetchExcited = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?mood=excited', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'f104bi07c490'
                }
            });
            const data = await response.json();
            console.log('setExcited', data)
            setExcited(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }



    const fetchSad = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?mood=sad', {
                headers: {
                    'accept': 'application/json',
                    'projectID': '131zmhaho3db'
                }
            });
            const data = await response.json();
            console.log('setSad', data)
            setSad(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }










    React.useEffect(() => {
        fetchTrendingSong();
    },[])
    React.useEffect(()=>{
        fetchTop20();
    },[])
    React.useEffect(()=>{
        fetchTop50();
    },[])
    React.useEffect(()=>{
        fetchEvergreen();
    },[])
    React.useEffect(()=>{
        fetchHappy();
    },[])
    React.useEffect(()=>{
        fetchRomantic();
    },[])
    React.useEffect(()=>{
        fetchExcited();
    },[])
    React.useEffect(()=>{
        fetchSad();
    },[])

    return (
        <main className="flex flex-col  bg-black">

            <header className="flex flex-col pt-4  w-full bg-black bg-opacity-0 max-md:max-w-full">
                <section className="flex overflow-hidden relative z-10 flex-col px-8 pb-2 w-full min-h-[75px] max-md:px-5 max-md:max-w-full">
                    
                    
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b085b88f54569b4158539f6dc61849d7df4ee8e1aa1bc5c62ddb5fce04dc314a?apiKey=d9edbd9b9779410cb6e09fa7760d29d8&" className="object-cover absolute inset-0 size-full" alt="" />
                   {/* <div className=" bg-black" > */}
                    <div className="flex justify-between  p- relative  pt-px  bg-black bg-opacity-0">
                        <div className="p-4  overflow-hidden relative flex-col  items-start px-4 py-5 text-base aspect-[3.06] text-stone-300 w-[162px] max-md:pr-5">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/712912365f2675b23859c08829c04b9c18a99f0c72d83fb9e2103ae7b66ea09c?apiKey=d9edbd9b9779410cb6e09fa7760d29d8&" className="object-cover absolute inset-0 " alt="" />
                        </div>
                        {/* </div> */}
                        <div className="p-4 ">

                            <button onClick={handleSignIn} className="px-4 py-3.5 bg-cyan-400 rounded-2xl border border-teal-700 border-solid">

                                {isLogin ? 'Sign Out' : 'Sign In'}
                            </button>

                        </div>
                    </div>
                </section>
            </header>



{/* ///////////////////////--------------------------------------------------------------------- */}


            <div  className='bg-black text-white pt-[70px]'>
                <div className='trending '>
                    <h1 className='text-base text-2xl font-bold text-neutral-300 px-3 py-2'>Trending Songs</h1>

                    <div className='flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]' >
                        {trending.map((item) => {
                            return (
                                <div
                                    className='m-1'
                                    onClick={() => {
                                        navigate(`/song/${item._id}`)
                                    }}>
                                    <img src={item.thumbnail} alt={(item.name) + 'thumbnail'} className='h-[220px] w-[220px] max-w-none' />
                                    <h2 className=' font-[500]'>{item.title}</h2>
                                    {item.artist.map((items) => {
                                        return (
                                            <span className='text-smtext-slate-400'>{items.name}, </span>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

{/* ///////////////////////--------------------------------------------------------------------- */}


<div className='bg-black text-white pt-[70px]'>
                <div className='trending '>
                    <h1 className='text-base text-2xl font-bold text-neutral-300 px-3 py-2'>Top 20 Songs of this week</h1>

                    <div className='flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]' >
                        {top20.map((item) => {
                            return (
                                <div
                                    className='m-1'
                                    onClick={() => {
                                        navigate(`/song/${item._id}`)
                                    }}>
                                    <img src={item.thumbnail} alt={(item.name) + 'thumbnail'} className='h-[220px] w-[220px] max-w-none' />
                                    <h2 className=' font-[500]'>{item.title}</h2>
                                    {item.artist.map((items) => {
                                        return (
                                            <span className='text-smtext-slate-400'>{items.name}, </span>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>


{/* ///////////////////////--------------------------------------------------------------------- */}
<div className='bg-black text-white pt-[70px]'>
                <div className='trending '>
                    <h1 className='text-base text-2xl font-bold text-neutral-300 px-3 py-2'>Top 50 of this month</h1>

                    <div className='flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]' >
                        {top50.map((item) => {
                            return (
                                <div
                                    className='m-1'
                                    onClick={() => {
                                        navigate(`/song/${item._id}`)
                                    }}>
                                    <img src={item.thumbnail} alt={(item.name) + 'thumbnail'} className='h-[220px] w-[220px] max-w-none' />
                                    <h2 className=' font-[500]'>{item.title}</h2>
                                    {item.artist.map((items) => {
                                        return (
                                            <span className='text-smtext-slate-400'>{items.name}, </span>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
{/* ///////////////////////--------------------------------------------------------------------- */}
<div className='bg-black text-white pt-[70px]'>
                <div className='trending '>
                    <h1 className='text-base text-2xl font-bold text-neutral-300 px-3 py-2'>Evergreen melodies</h1>

                    <div className='flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]' >
                        {evergreen.map((item) => {
                            return (
                                <div
                                    className='m-1'
                                    onClick={() => {
                                        navigate(`/song/${item._id}`)
                                    }}>
                                    <img src={item.thumbnail} alt={(item.name) + 'thumbnail'} className='h-[220px] w-[220px] max-w-none' />
                                    <h2 className=' font-[500]'>{item.title}</h2>
                                    {item.artist.map((items) => {
                                        return (
                                            <span className='text-smtext-slate-400'>{items.name}, </span>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
{/* ///////////////////////--------------------------------------------------------------------- */}


{/* ///////////////////////--------------------------------------------------------------------- */}

<div className='bg-black text-white pt-[70px]'>
                <div className='trending '>
                    <h1 className='text-base text-2xl font-bold text-neutral-300 px-3 py-2'>Happy😊</h1>

                    <div className='flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]' >
                        {happy.map((item) => {
                            return (
                                <div
                                    className='m-1'
                                    onClick={() => {
                                        navigate(`/song/${item._id}`)
                                    }}>
                                    <img src={item.thumbnail} alt={(item.name) + 'thumbnail'} className='h-[220px] w-[220px] max-w-none' />
                                    <h2 className=' font-[500]'>{item.title}</h2>
                                    {item.artist.map((items) => {
                                        return (
                                            <span className='text-smtext-slate-400'>{items.name}, </span>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
{/* ///////////////////////--------------------------------------------------------------------- */}
<div className='bg-black text-white pt-[70px]'>
                <div className='trending '>
                    <h1 className='text-base text-2xl font-bold text-neutral-300 px-3 py-2'>RomanticRomantic🥰</h1>

                    <div className='flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]' >
                        {romantic.map((item) => {
                            return (
                                <div
                                    className='m-1'
                                    onClick={() => {
                                        navigate(`/song/${item._id}`)
                                    }}>
                                    <img src={item.thumbnail} alt={(item.name) + 'thumbnail'} className='h-[220px] w-[220px] max-w-none' />
                                    <h2 className=' font-[500]'>{item.title}</h2>
                                    {item.artist.map((items) => {
                                        return (
                                            <span className='text-smtext-slate-400'>{items.name}, </span>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
{/* ///////////////////////--------------------------------------------------------------------- */}

<div className='bg-black text-white pt-[70px]'>
                <div className='trending '>
                    <h1 className='text-base text-2xl font-bold text-neutral-300 px-3 py-2'>Excited😜</h1>

                    <div className='flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]' >
                        {excited.map((item) => {
                            return (
                                <div
                                    className='m-1'
                                    onClick={() => {
                                        navigate(`/song/${item._id}`)
                                    }}>
                                    <img src={item.thumbnail} alt={(item.name) + 'thumbnail'} className='h-[220px] w-[220px] max-w-none' />
                                    <h2 className=' font-[500]'>{item.title}</h2>
                                    {item.artist.map((items) => {
                                        return (
                                            <span className='text-smtext-slate-400'>{items.name}, </span>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
{/* ///////////////////////--------------------------------------------------------------------- */}
<div className='bg-black text-white pt-[70px]'>
                <div className='trending '>
                    <h1 className='text-base text-2xl font-bold text-neutral-300 px-3 py-2'>Sad😔</h1>

                    <div className='flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]' >
                        {sad.map((item) => {
                            return (
                                <div
                                    className='m-1'
                                    onClick={() => {
                                        navigate(`/song/${item._id}`)
                                    }}>
                                    <img src={item.thumbnail} alt={(item.name) + 'thumbnail'} className='h-[220px] w-[220px] max-w-none' />
                                    <h2 className=' font-[500]'>{item.title}</h2>
                                    {item.artist.map((items) => {
                                        return (
                                            <span className='text-smtext-slate-400'>{items.name}, </span>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>




        </main>
    );
};

export default HomePage;













