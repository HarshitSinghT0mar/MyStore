import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);


  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      navigate("/Login");
    } catch (error) {
      console.log(error);
    }

    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar
          alt="user"
          src={auth?.currentUser?.photoURL}
          sx={{ width:34,height:34, backgroundColor:"#005ca8;",border:"1px solid white",transition:"all 0.1s ease", '&:hover':{width:36,height:36,zIndex:2}}}
        />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {auth?.currentUser&&(<div><MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem></div>)}
        <MenuItem onClick={handleLogOut}>{auth?.currentUser?"Logout":"Login"}</MenuItem>
      </Menu>
    </div>
  );
}
