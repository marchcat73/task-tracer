import React from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';

  const BsNavlink = (props) => {
    const { route, title } = props
    return (
      <Link href={ route }>
        <a className="nav-link navbar-block__link">{ title }</a>
      </Link>     
    )
  }

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md" className="navbar-block">
          <NavbarBrand className="navbar-block__link" href="/">Brand</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <BsNavlink route="/" title="Вход" />
              </NavItem>
              <NavItem>
                <BsNavlink route="/registration" title="Регистрация" />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

