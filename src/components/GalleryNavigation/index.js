import {NavLink, Route, Switch} from 'react-router-dom'
import './GalleryNavigation.css'
import {Navbar,Nav} from 'react-bootstrap'
export default function GalleryNavigation(props){
   
    const {galleries} = props;
    console.log(galleries)
    return (
        <Navbar sticky="bottom" bg="dark" className="nav-bar-color" expand="lg">

            
            <NavLink to="/">
                <Navbar.Brand className="navBrand" >Galleries:</Navbar.Brand>
            </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
           {galleries.map(gallery => {
               return (   

                            <NavLink exact key={gallery.galleryid} to={`/galleries/${gallery.galleryid}`} >
                            <Nav.Link className="nav-link-color" href={`/galleries/${gallery.galleryid}`}>
                            {gallery.name}
                            </Nav.Link>
                            </NavLink>
               )
            })}
           
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}