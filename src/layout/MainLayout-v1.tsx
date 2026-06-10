import type { ReactNode } from "react";

import Header from "./Header.tsx";
import Sidebar from "./Sidebar.tsx";
import Footer from "./Footer.tsx";

interface Props {
    children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
    return (
        <div className="app-container">
            <Header />

            <div className="content-wrapper">
                <Sidebar />

                <main className="main-content">
                    {children}
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default MainLayout