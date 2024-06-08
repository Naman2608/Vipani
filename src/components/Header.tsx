import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  // FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { User } from "../types/types";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import toast from "react-hot-toast";

interface PropsType {
  user: User | null;
}
const Header = ({ user }: PropsType) => {
  // const [isOpen, setIsOpen] = useState(false);
  const logouthandler = async () => {
    try {
      await signOut(auth);
      toast.success("Sign Out Successfully");
      // setIsOpen(false);
    } catch (error) {
      toast.success("Sign Out Failed");
    }
  };
  return (
    <nav className="header">
      <Link
        onClick={() => {
          // setIsOpen(false);
        }}
        to={"/"}
      >
        Home
      </Link>
      {user?.role === "admin" && <Link to="/admin/dashboard">Admin</Link>}
      <Link to="/orders">Orders</Link>
      <Link
        onClick={() => {
          // setIsOpen(false);
        }}
        to={"/search"}
      >
        <FaSearch />
      </Link>
      <Link
        onClick={() => {
          // setIsOpen(false);
        }}
        to={"/cart"}
      >
        <FaShoppingBag />
      </Link>
      <div className="more-options">
        {user?._id ? (
          <>
            <button
              onClick={() => {
                // setIsOpen((prev) => !prev);
              }}
            >
              {/* <FaUser /> */}
              <button onClick={logouthandler}>
                <FaSignOutAlt />
              </button>
            </button>
            {/* <dialog open={isOpen}>
              <div>
                {user.role === "admin" && (
                  <Link to="/admin/dashboard">Admin</Link>
                )}
                <Link to="/orders">Orders</Link>
                <button onClick={logouthandler}>
                  <FaSignInAlt />
                </button>
              </div>
            </dialog> */}
          </>
        ) : (
          <Link to={"/login"}>
            <FaSignInAlt />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
