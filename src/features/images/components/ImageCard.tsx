import { ImageProps } from "../types/imageTypes";

const ImageCard: React.FC<ImageProps> = (props: ImageProps) => {

    return (
        <figure key={props.image.id}>                    
            <img 
                src={props.image.urls.small}
                alt={props.image.alt_description || `Photo ${props.image.id}`} />
            <figcaption>
                <p>by {props.image.user.name}</p>
                <p>{props.image.created_at}</p>
            </figcaption>
        </figure>
    )
}

export default ImageCard;