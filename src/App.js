import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from "react-dom/client";

// Default imports
import HeaderComponent from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import Profile from './Components/Profile';
import Cart from './Components/Cart';
import './index.css'; // Update this path if needed
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import './Components/cas.css'

// Named import
import Shimmer from './Components/Shimmer';
import UserContext from './Utils/UserContext';
import { Provider } from 'react-redux';
import store from './Utils/Store';

// React Toastify for notifications
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Lazy loading components
const Instamart = lazy(() => import("./Components/Instamart"));
const About = lazy(() => import("./Components/About"));

const App = () => {
    const [user, setUser] = useState({
        name: "Keegan Colaco",
        email: "key@gmail.com"
    });

    return (
        <Provider store={store}>
            <UserContext.Provider value={{ user }}>
                <HeaderComponent />
                <Outlet /> {/* Placeholder for child routes */}
                <Footer />
                <ToastContainer
                    className="toast-container"
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </UserContext.Provider>
        </Provider>
    );
};

export default App;

// React Router - creating the router
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>Loading....</h1>}>
                        <About />
                    </Suspense>
                ),
                children: [
                    {
                        path: "profile", // localhost:1234/about/profile
                        element: <Profile />,
                    },
                ],
            },
            {
                path: "/contactUs",
                element: <Contact />,
            },
            {
                path: "/restaurant/:resId", // dynamic routing with useParams
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </Suspense>
                ),
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
