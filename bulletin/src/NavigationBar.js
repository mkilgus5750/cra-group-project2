import React, { useState, Component} from 'react';
import './NavigationBar.css';
import {
    Navbar,
    NavItem,
    NavLink
} from 'reactstrap';

export default class NavigationBar extends Component{

    render(){
        return(

            <div className="Nav">
                <Navbar color="light" >
                    <NavItem>
                        <NavLink href="#Jacob-Madsen">Jacob</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="#Shreya-Thammana">Shreya</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="#Mari-Kilgus">Mari</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="#Armando-Partida">Armando</NavLink>
                    </NavItem>
                </Navbar>
            </div>
        )
    }
};
