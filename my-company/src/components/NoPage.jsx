import { Link } from "react-router-dom";
const NoPage = () => {
  return (
    <>
        <h1>404 Error</h1>
        <h2>Page Not Found :D</h2>
        <Link to={"/"}>Go to Home</Link>
    </>
  )
};

export default NoPage;