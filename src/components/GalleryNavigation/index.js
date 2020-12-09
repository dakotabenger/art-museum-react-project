import {NavLink, Route, Switch} from 'react-router-dom'
import './GalleryNavigation.css'

export default function GalleryNavigation(props){
   
    const {galleries} = props;
    console.log(galleries)
    return (
        <nav>
            
            <NavLink to="/">
                <h1>Galleries</h1>
            </NavLink>
           {galleries.map(gallery => {
               return ( <NavLink exact key={gallery.galleryid} to={`/galleries/${gallery.galleryid}`} >
                   {gallery.name}
               </NavLink>
               )
            })}
           
        </nav>
    )
    }