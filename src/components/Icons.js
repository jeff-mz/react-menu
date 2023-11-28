import React, { Component } from "react";
import { styled } from "styled-components";
import MenuWrapper from "./MenuWrapper";

const Container = styled.div`
@media(max-width:768px){
  display: inline-block;
  cursor: pointer;
  position:fixed;
  top:10px ;
  right:10px ;
  margin:0rem 1rem;
  :nth-child(1){
  transform: ${props => props.opened ? `translate(0, 11px) rotate(-45deg)` : `translate(0,0px) rotate(0)`};
}
  :nth-child(2){
  opacity: ${props => props.opened ? `0` : `1`};
}
:nth-child(3){
    transform: ${props => props.opened ? `translate(0, -11px) rotate(45deg)` : `translate(0,0px) rotate(0)`};
  }
  div{
    width: 35px;
    height: 5px;
    background-color: red;
    margin: 6px 0;
    transition: all 0.4s;
  }
  
}
`;

// change.bar1 {
// }

// .change.bar2 { opacity: 0; }

// .change.bar3 {
//   transform: translate(0, -11px) rotate(45deg);
// }
// Transform^
class Icons extends Component {
  constructor() {
    super()
    this.state = { opened: false }
  }

  clickHandler = () => {
    this.setState({ opened: !this.state.opened })
    console.log(`test`);
    console.log(this.state.opened);
  }
  render() {
    return (
      <>
        <Container opened={this.state.opened} onClick={this.clickHandler}>
          <div></div>
          <div></div>
          <div></div>
        </Container>
        <MenuWrapper opened={this.state.opened}></MenuWrapper>
      </>
    );
  }
}

export default Icons;
