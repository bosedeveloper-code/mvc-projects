import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div
            style={{
                textAlign: "center",
                paddingTop: "100px",
            }}
        >
            <h1>404</h1>
            <h2>Page Not Found</h2>

            <p>
                The page you are looking for does not exist.
            </p>

            <Link to="/">
                Go to Home
            </Link>
        </div>
    );
}

export default NotFoundPage;