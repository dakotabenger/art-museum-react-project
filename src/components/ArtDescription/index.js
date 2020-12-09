import { useParams,Link } from "react-router-dom";

export default function ArtDescription({gallery}) {
    const {artid} = useParams();

    return (
        <h1>Testing</h1>
        // <div>
        //     <Link to={`/galleries/${gallery.gallerynumber}`}>
        //         Back to Gallery {gallery.objects[artid].name}
        //     </Link>
        //     <a href={gallery.url}>{gallery.objects[artid].title}</a>
        //     <p>Description: {gallery.objects[artid].description}</p>
        //     <p>Credit: {gallery.objects[artid].creditline}</p>
        //     <p>Technique: {gallery.objects[artid].technique}</p>
        //     {gallery.objects[artid].images.map(image => {
        //         return (
        //             <img src={image.baseimageurl} alt={image.alt} />
        //         )
        //     })}
        // </div>
    )
}