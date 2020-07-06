import React from "react";
import ForumIcon from "@material-ui/icons/Forum";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import PersonIcon from "@material-ui/icons/Person";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import Profile from "./pages/Profile";

export interface PagesProps {
  main: boolean;
  name: string;
  path: string;
  component: React.ReactNode;
  icon: React.ReactNode;
}

export const Pages: PagesProps[] = [
  {
    main: true,
    name: "Home",
    path: "/",
    component: <Home />,
    icon: <HomeIcon />,
  },
  {
    main: false,
    name: "Chat",
    path: "/chat/:id",
    component: <Chat />,
    icon: <ForumIcon />,
  },
  {
    main: true,
    name: "Chat",
    path: "/chat",
    component: <Chat />,
    icon: <ForumIcon />,
  },
  {
    main: false,
    name: "Profile",
    path: "/profile/:id",
    component: <Profile />,
    icon: <PersonIcon />,
  },
  {
    main: true,
    name: "Profile",
    path: "/profile",
    component: <Profile />,
    icon: <PersonIcon />,
  },
  {
    main: true,
    name: "Settings",
    path: "/settings",
    component: <Setting />,
    icon: <SettingsIcon />,
  },
];
