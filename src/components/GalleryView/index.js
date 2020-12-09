import {useParams} from "react-router-dom";
import ArtImageTile from "../ArtImageTile";
import {Route} from 'react-router-dom'

export default function GalleryView({galleries}){
    const {galleryId} = useParams();
 
    console.log(galleries)
    const gallery = galleries.find(gallery => gallery.gallerynumber === galleryId)
    console.log(gallery.objects)
    return(
        <div>
            <h1> Hello from Gallery View!</h1>
            <h2>{gallery.name}</h2>
            <Route exact path={`/galleries/:galleryid`}>
            {gallery.objects.map(artwork => {
                console.log(artwork)
                return (
                 <ArtImageTile artwork={artwork} galleryId={galleryId}/>    
                )
                
            })}
            </Route>
        </div>
    )
}