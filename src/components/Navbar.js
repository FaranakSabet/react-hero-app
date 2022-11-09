import React from "react";
import styled from "styled-components";
import Logo1 from "../assets/logo.png";
import {Link} from "react-router-dom";


const NavbarContainer = styled.div``;
const NavbarWrap = styled.div``;
const Logo = styled.div``;
const Nav = styled.div``;
const NavLink = styled.div``;
const Search = styled.div``;
const SearchWrap = styled.div``;
const Input = styled.div``;
const ButtonContainer = styled.div``;
const Button = styled.div``;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrap>
        <Logo />
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Market</NavLink>
          <NavLink to="/">Trade</NavLink>
          <NavLink to="/">Pricing</NavLink>
          <NavLink to="/">Download</NavLink>
          <NavLink to="/">Help</NavLink>
        </Nav>
        <Search>
          <SearchWrap>
            <Input type="text" placeholder="symbol" />
          </SearchWrap>
        </Search>
        <ButtonContainer>
            <Button>
                Sign up
            </Button>
            <Button>
                Log in
            </Button>

        </ButtonContainer>
      </NavbarWrap>
    </NavbarContainer>
  );
};

export default Navbar;
