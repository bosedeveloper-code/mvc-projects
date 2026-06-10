import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ChangePassword from "./pages/ChangePassword";
import ForgetPassword from "./pages/ForgetPassword";

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
        {
            path: "/forget-password",
            element: <ForgetPassword />,
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