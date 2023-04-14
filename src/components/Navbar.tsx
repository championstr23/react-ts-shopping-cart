import { Container, Button, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
/* Create a Navbar with Bootstao*/ 

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="/" as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                {cartQuantity > 0 && (<Button
                    onClick={openCart}
                    style={{ position: "relative" }}
                    variant="outline-primary"
                    className="rounded-circle"
                >
                    <svg width="20px" height="20px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">

                    <path d="M0 0h48v48H0z" fill="none"/>
                    <g id="Shopicon">
                        <path d="M8,44h32c2.2,0,4-1.8,4-4l0-26h-8.18C34.863,8.334,29.934,4,24,4S13.137,8.334,12.181,14H4l0,26C4,42.2,5.8,44,8,44z M24,8
                            c3.719,0,6.845,2.555,7.737,6H16.263C17.155,10.555,20.281,8,24,8z M12,18v4h4v-4h16v4h4v-4h4l0,22L8,40l0-22H12z"/>
                    </g>
                    </svg>

                    <div
                        className="rounded-circle bg-danger d-flex
                        justify-content-center align-items-center"
                        style={{ 
                            color: "white",
                            width: "1.5rem", 
                            height: "1.5rem", 
                            position:"absolute", 
                            bottom: 0, 
                            right: 0,
                            transform: "translate(25%, 25%)"
                        }}
                    >
                        {cartQuantity}
                    </div>
                </Button>
                )}
            </Container>
        </NavbarBs>
    )
}