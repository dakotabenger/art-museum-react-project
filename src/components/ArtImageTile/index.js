import {Link} from 'react-router-dom'

export default function ArtImageTile({artwork, galleryId}){
   
    
    console.log(artwork)
    return(
        <Link to={`/galleries/${galleryId}/art/${artwork.id}`}>
            <img src={artwork.primaryimageurl} alt={artwork.description}>
            </img>
        
        </Link>
    )
}