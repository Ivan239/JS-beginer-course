import React from 'react';
import Header from './layout/Header/Header'
import Main from './layout/Main/Main'
import Footer from './layout/Footer/Footer'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import NotFound from './pages/NotFound/NotFound';
import styles from './App.module.sass'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
    return (
        <div className={styles.app}>
            <BrowserRouter>
                <Header />
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;