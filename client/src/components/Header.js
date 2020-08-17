import React from 'react';
import { Nav, Navbar, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import menu from '../images/menu.png';
import '../style/Header.scss'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            modalState: false
        };
    }

    handleClick() {
        this.setState({ modalState: !this.state.modalState})
    }

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                        <button className="login">
                            <a href="/auth/google">Log in</a>
                        </button>
                );
            default:
                return [
                        <button className="login">
                            <a  href="/api/logout">Log out</a>
                        </button>
                ];
        }
    }

    render() {
        return (
            <>
                <Modal  className="my-modal" show={this.state.modalState} onHide={this.handleClick} centered>
                    <Modal.Body className="my-modal-body">
                        <Link
                            to={process.env.PUBLIC_URL + "/"}
                            className="modal-links"
                            onClick={this.handleClick}
                        >
                            Home
                        </Link>
                        <Link
                            to={process.env.PUBLIC_URL + "/booking"}
                            className="modal-links "
                            onClick={this.handleClick}
                        >
                            Book Now
                        </Link>
                        <Link
                            to={process.env.PUBLIC_URL + "/events" }
                            className="modal-links "
                            onClick={this.handleClick}
                        >
                            Event Categories
                        </Link>
                        <Link
                            to={process.env.PUBLIC_URL + "/enterprise"}
                            className="modal-links "
                            onClick={this.handleClick}
                        >
                            Enterprise
                        </Link>
                        <Link
                            to={process.env.PUBLIC_URL + "/join"}
                            className="modal-links "
                            onClick={this.handleClick}
                        >
                            Become a PVMMer
                        </Link>
                        <Link
                            to={process.env.PUBLIC_URL + "/faq" }
                            className="modal-links "
                            onClick={this.handleClick}
                        >
                            FAQ
                        </Link>
                    </Modal.Body>
                </Modal>
                {/* Navigation bar at top of screen */}
                <Navbar
                    className="header-navbar p-1 fixed-top"
                    style={{
                        justifyContent: 'space-between',
                        display: 'flex',
                        padding: '12px'
                    }}>
                    <Link
                        to={this.props.auth ? '/projects' : '/'}
                        className="name"
                        style={{paddingLeft: '15px' }}
                    >
                        PVMM
                    </Link>

                    <div className="nav navbar-nav navbar-right" >
                        {this.renderContent()}
                        <Nav.Link style={{ paddingRight: '20px'}} href="#" onClick={this.handleClick}>
                            <img className="header-image" src={menu} alt="menu"/>
                        </Nav.Link>
                    </div>
                </Navbar>
            </>
        );
    }
}


function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
