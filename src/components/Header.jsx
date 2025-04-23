import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
  return (
    <Wrapper>
        <NavLink className={"navlink"} to={"/"}>Home</NavLink>
        <NavLink className={"navlink"} to={"/about"}>About</NavLink>
        <NavLink className={"navlink"} to={"/news"}>News</NavLink>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
    display: flex;
    gap: 20px;

    .navlink {
        color: green;
        text-decoration: none;
    
        &.active {
            color: red;
        }
    }


`