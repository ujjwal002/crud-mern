import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
const Header = styled(AppBar)`
  background-color: "#111111";
`;
const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
`;
const Navbar = () => {
  return (
    <Header position="static" background="black">
      <Toolbar>
        <Tabs to="/">Code for Interview</Tabs>
        <Tabs to="/all">All Users</Tabs>
        <Tabs to="add"> Add User</Tabs>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
