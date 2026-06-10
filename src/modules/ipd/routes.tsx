import IpdDashboard from "./pages/IpdDashboard";

const ipdRoutes = {
    protected: [
        {
            path: "/ipd-dashboard",
            element: <IpdDashboard />
        },
    ],
};

export default ipdRoutes;