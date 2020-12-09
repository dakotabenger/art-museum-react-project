import {Link, useParams} from 'react-router-dom'

export default function ArtImageTile({art}){
   const {galleryid} = useParams()
    
    return(
        <Link to={`/galleries/${galleryid}/art/${art.id}`}>
            <img src={art.primaryimageurl} alt={art.description}>
            </img>
        
        </Link>
    )
}