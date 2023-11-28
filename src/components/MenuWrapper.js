import React from "react";
import { styled } from "styled-components";

const Ul = styled.ul`
  background-color: #333;
  display:flex;
  li {
    font-size: 1.1rem;
    list-style: none;
    color: #f1f1f1;
    margin: 2rem;
    cursor:pointer;
  }
  @media (max-width: 768px) {
     flex-direction: column; 
     width:170px;
     float:right;
     height:100vh;
     padding-top:2.5rem;
     position:fixed;
     top:0;
     z-index:-10;
     transition: all 0.4s;
     right:-170px;
     transform: ${(props) =>
     props.opened ? `translateX(-100%)` : `translateX(100%)`};
      } 
}
`;
const MenuWrapper = ({ opened }) => {
  return (
    <Ul opened={opened}>
      <li>Home</li>
      <li>About</li>
      <li>Blog</li>
      <li>Contact</li>
    </Ul>
  );
};

export default MenuWrapper;
