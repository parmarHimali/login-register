import { Link, useNavigate } from "react-router-dom";

const ShowData = ({ loginDetail }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loginUser");
    navigate("/");
  };
  return (
    <div className="show-data">
      {Object.keys(loginDetail).length !== 0 ? (
        <>
          <div className="show">
            <h2>Welcome, {loginDetail.name}</h2>
            <ul>
              <li>
                <span>Name:</span> {loginDetail.name}
              </li>
              <li>
                <span>Email:</span> {loginDetail.email}
              </li>
              <li>
                <span>Phone:</span> {loginDetail.phone}
              </li>
              <li>
                <span>Password:</span> {loginDetail.password}
              </li>
              <li>
                <span>Confirm Password:</span> {loginDetail.cpassword}
              </li>
              <li>
                <span>Gender:</span> {loginDetail.gender}
              </li>
              <li>
                <span>City:</span> {loginDetail.city}
              </li>
              <li>
                <span>Agree with terms & conditions:</span> {loginDetail.agree}
              </li>
            </ul>
            <button className="btn-logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </>
      ) : (
        <div className="show">
          <h2>Access denied, Please Login first!</h2>
          <Link to={"/login"}>Login</Link>
        </div>
      )}
    </div>
  );
};

export default ShowData;
