import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';
const COLORS = {
  primaryDark: "#115b4c",
  primaryLight: "#B6EDC8",
};

const MenuLabel = styled.label`
  /* background-color: ${COLORS.primaryLight}; */
  position: fixed;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
  z-index: 1000;
  /* box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3); */
  text-align: center;
  right: 17px;
  top: -15px
`;

const NavBackground = styled.div`
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: radial-gradient(
    #141414,
    #141414
  );
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "#fff")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;
  &::before{
    content: "";
    background-color: #fff;
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
    margin-left: 1rem;
  }
  /* &::after {
    content: "";
    background-color: #fff;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  } */
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 48%;
  left: 48%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;
const ItemLink = styled.a`
  font-family: ui-monospace;
  display: inline-block;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  display: block;
  padding-bottom: 40px;
  text-align: right;
  position: relative;
  left: 0;
  letter-spacing: .15em;
  transition: all 0.2s ease-out;
  letter-spacing: 4.5px;
  text-decoration: none;
  color: #ffffff;
  padding: 1rem 2rem;
    @media (max-width: 600px){
      text-align: center;
    }
  /* background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  ); */
  background-size: 240%;
  transition: all 0.4s;
  cursor:pointer;
  &:hover,
  &:active {
    background-position: 100%;
    color: #cccccc;
    left: -12px;
    transition: all 0.2s ease-out;
  }
`;

const HamburgerMenu = (props) => {
  const { click, handleClick } = props

  return (
    <>

      <MenuLabel htmlFor="navi-toggle" className="label-close" onClick={handleClick}>
        <Icon className="close" clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>

        <h5 className="about-title">About</h5>
        <div className="content-item">
          <p>Wunderfauks is an integrated creative agency focusing on new and innovative experiences. From the likes of creative expression to a
            campaign execution, communication and creative implementation, Wunderfauks provides tailored bulls-eye solutions that focus on results over activities.</p>
          <br></br>
          <p>With digital as our strong suit, we have a dynamic team comprising of multi-disciplinary individuals
            with their own think tanks of interesting ideas and concepts to suit any need, logic and aspiration.</p>
        </div>

        <List>
          <div className="social-share">
            <ul>
              <li>
                <a href="/" className="social"><img src="../fac.png" className="social" alt="logo" /></a>
              </li>
              <li>
                <a href="/" className="social"><img src="../ig.png" className="social" alt="logo" /></a>
              </li>
              <li>
                <a href="/" className="social"><img src="../linkedin.png" className="social" alt="logo" /></a>
              </li>
            </ul>
          </div>
          <li>
            <ItemLink onClick={handleClick} to="/">
              Work
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/about">
              Services
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/portfolio">
              Approach
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/blog">
              Careers
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/contact">
              Contact
            </ItemLink>
          </li>
        </List>

      </Navigation>

    </>
  );
}


export default HamburgerMenu;