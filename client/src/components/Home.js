import React,{useEffect} from 'react';
import MainPageContainer from './mainpage-container/MainPageContainer';
import NavBar from './NavBar';

function Home() {
    useEffect(()=>{
        console.log("hello")
      },[])

    return (
        <>
            <NavBar />
            <MainPageContainer />
        </>
    )
}

export default Home
