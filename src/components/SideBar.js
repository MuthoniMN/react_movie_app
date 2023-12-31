import React from "react";
import Logo from "./Logo";
import { faArrowRightToBracket, faCalendarDays, faHome, faRightFromBracket, faTelevision, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const SideBar = () => {
    const navigate = useNavigate()
    const user = auth.currentUser

    async function logout(e) {
        await signOut(auth)
            .then(data => {
                navigate("/")
            })
            .catch(err => console.error(err))

    }

    return (
        <div className="sidebar d-flex flex-column gap-3">
            <Logo textColor={"#BE123C"} />
            <MenuItem icon={faHome} value={"Home"} link={"/"} />
            <MenuItem icon={faVideoCamera} value={"Movies"} link={"/movies"} />
            <MenuItem icon={faTelevision} value={"TV Series"} link={"/tv-series"} />
            <MenuItem icon={faCalendarDays} value={"Upcoming"} link={"/upcoming"} />

            {user ? <MenuItem icon={faRightFromBracket} value={"Log Out"} onClick={(e) => logout(e)} /> : <MenuItem icon={faArrowRightToBracket} value={"Sign Up"} link={"/signup"} />}
        </div>
    )
}

export default SideBar;