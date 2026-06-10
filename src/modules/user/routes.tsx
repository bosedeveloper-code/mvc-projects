import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";

const userRoutes = {
    public: [
        {
            path: "/",
            element: <LoginPage />,
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/register",
            element: <RegisterPage />,
        },
    ],

    protected:[
        {
            path: "/profile",
            element: <ProfilePage />,
        },

    ]
};

export default userRoutes;