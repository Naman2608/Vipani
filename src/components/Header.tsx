import { useState } from "react";
import { FaSearch, FaShoppingBag, FaSignInAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { User } from "../types/types";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import toast from "react-hot-toast";

interface PropsType {
  user: User | null;
}
const Header = ({ user }: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const logouthandler = async () => {
    try {
      await signOut(auth);
      toast.success("Sign Out Successfully");
      setIsOpen(false);
    } catch (error) {
      toast.success("Sign Out Failed");
    }
  };
  return (
    <nav className="header">
      <Link
        onClick={() => {
          setIsOpen(false);
        }}
        to={"/"}
      >
        Home
      </Link>
      <Link
        onClick={() => {
          setIsOpen(false);
        }}
        to={"/search"}
      >
        <FaSearch />
      </Link>
      <Link
        onClick={() => {
          setIsOpen(false);
        }}
        to={"/cart"}
      >
        <FaShoppingBag />
      </Link>
      {user?._id ? (
        <>
          <button
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link to="/admin/dashboard">Admin</Link>
              )}
              <Link to="/orders">Orders</Link>
              <button onClick={logouthandler}>
                <FaSignInAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
