import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import {AuthContextProvider} from "./Context/Context";
import Account from "./Components/Account";
import Protected from "./Components/Protected";

function App() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Navbar/>
                <Routes>
                    <Route path={'/'}
                           element={<Home/>}/>
                    <Route path={'/signin'}
                           element={<SignIn/>}/>
                    <Route path={'/account'}
                           element={<Protected><Account/></Protected>}/>
                </Routes>
            </AuthContextProvider>
        </BrowserRouter>
    );
}

export default App;


//
// https://www.youtube.com/watch?v=cZAnibwI9u8&t=3s
//16:00