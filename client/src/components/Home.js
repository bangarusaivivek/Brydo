import React,{useEffect} from 'react';
import MainPageContainer from './mainpage-container/MainPageContainer';
import NavBar from './NavBar';
import BottomNavbar from './BottomNavbar';

function Home() {
    useEffect(()=>{
        console.log("hello")
      },[])

    return (
        <>
            <NavBar />
            <MainPageContainer />
            <BottomNavbar />
        </>
    )
}

export default Home
