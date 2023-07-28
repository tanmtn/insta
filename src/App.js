import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';

import Layout from 'components/Layout';
import Chatting from './screens/Chatting';
import Home from './screens/Home';
import Login from './screens/Login';
import Profile from './screens/Profile';
import SignUp from './screens/SignUp';
import { GlobalStyle, darkTheme, WhiteTheme } from './styles';

import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';

function App() {
    const [isLogin, setIsLogin] = useState(true);
    const [darkMode, setDarkMode] = useState(true);

    return (
        <HelmetProvider>
            <ThemeProvider theme={darkMode ? darkTheme : WhiteTheme}>
                <GlobalStyle />
                <Router>
                    <Routes>
                        <Route
                            path={routes.home}
                            element={
                                isLogin ? (
                                    <Layout>
                                        <Home />
                                    </Layout>
                                ) : (
                                    <Login />
                                )
                            }
                        />
                        <Route path={routes.signup} element={<h1>{<SignUp />}</h1>} />
                        <Route
                            path={routes.profile}
                            element={
                                <h1>
                                    {
                                        <Layout>
                                            <Profile />
                                        </Layout>
                                    }
                                </h1>
                            }
                        />
                        <Route path={routes.chatting} element={<h1>{<Chatting />}</h1>} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </HelmetProvider>
    );
}

export default App;
