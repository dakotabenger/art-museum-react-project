import ArtImageTile from "../ArtImageTile";
import {Route,Switch,useParams} from 'react-router-dom'
import ArtDescription from "../ArtDescription";

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
            {gallery.objects.map(art => {
                // console.log(artwork)
                return (
                <ArtImageTile art={art} galleryId={galleryId}/>    
                )
                
            })}
            </Route>
            <Route exact path="/galleries/:galleryid/art/:artid">
                <ArtDescription gallery={gallery} />
            </Route>
            
        </div>
    )
}