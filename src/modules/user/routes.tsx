import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ChangePassword from "./pages/ChangePassword";

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
        {
            path: "/change-password",
            element: <ChangePassword />,
        },

    ]
};

export default userRoutes;