import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
          <span>Shilli Social</span>
        </Link>
        <HomeOutlinedIcon/>
        <DarkModeOutlinedIcon/>
        <GridViewOutlinedIcon/>
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder="Search ..." />
        </div>
      </div>
      
      <div className="right">
        <PersonOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
          <img src="https://images.pexels.com/photos/28011282/pexels-photo-28011282/free-photo-of-a-young-female-golden-retriever-poses-in-front-of-golden-ears-of-wheat-with-old-log-houses-in-an-open-air-museum-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="John Doe" />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
