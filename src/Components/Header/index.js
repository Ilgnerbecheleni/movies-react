import { Navbar, NavbarBrand } from "reactstrap"

export default function Header() {

    return (
        <>
            <Navbar

                color="secondary"
                dark
            >
                <NavbarBrand href="/">
                    Lista de Filmes
                </NavbarBrand>
            </Navbar>


        </>



    );



}