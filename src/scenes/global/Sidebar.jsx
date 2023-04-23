import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import BrushIcon from '@mui/icons-material/Brush';
import SecurityIcon from '@mui/icons-material/Security';
import GitHubIcon from '@mui/icons-material/GitHub';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ClosedCaptionOffIcon from '@mui/icons-material/ClosedCaptionOff';
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CodeIcon from '@mui/icons-material/Code';

import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Profile
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Hack-o-fiesta
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Welcome !
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Wings
            </Typography>
            <Item
              title="Competitive Programming"
              to="/cp"
              icon={<ClosedCaptionOffIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Web Development"
              to="/webdev"
              icon={<CodeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Application Development"
              to="/appdev"
              icon={<DeveloperModeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Foss"
              to="/foss"
              icon={<GitHubIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Blockchain"
              to="/blockchain"
              icon={<CurrencyBitcoinIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Machine Learning"
              to="/ml"
              icon={<PrecisionManufacturingIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
            title="Infomation Security"
            to="/infosec"
            icon={<SecurityIcon />}
            selected={selected}
            setSelected={setSelected}
          /><Item
          title="Design"
          to="/design"
          icon={<BrushIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Edit Profile"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Schedule"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
