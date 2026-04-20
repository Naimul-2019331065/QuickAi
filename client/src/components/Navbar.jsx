import { useClerk, UserButton, useUser } from "@clerk/react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const { openSignIn } = useClerk();
    return (
        <div className="fixed z-5 w-full items-center py-3 px-4 sm:px-20 xl:px-32 flex justify-between backdrop-blur-2xl">
            <img
                src={assets.logo}
                alt="logo"
                className="w-32 sm:w-44 cursor-pointer"
                onClick={() => navigate("/")}
            />
            {user ? (
                <UserButton />
            ) : (
                <button
                    onClick={openSignIn}
                    className="flex gap-2 items-center rounded-full px-8 py-2.5 text-sm cursor-pointer bg-primary text-white "
                >
                    {" "}
                    Get started <ArrowRight className="w-4 h-4" />
                </button>
            )}
        </div>
    );
};

export default Navbar;
