import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../state/hooks";
import { extractNouns, transformDate } from "../../../utils/utils";
import { ImageProps } from "../types/imageTypes";
import { setSearchQuery } from "../../search/state/searchSlice";
import { fetchByQuery } from "../state/imageSlice";

const ImageCard: React.FC<ImageProps> = (props: ImageProps) => {
    const formattedDate = transformDate(props.image.created_at);

    const tags = extractNouns(props.selectedTag, props.image.alt_description || props.image.description || '');

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const searchByTag = (tag: string) => {
        navigate(`/tag/${tag}`);
        dispatch(setSearchQuery(tag));
        dispatch(fetchByQuery(tag));
    }
    
    return (
        <figure className="relative py-5">
            <img className="w-full image-container"
                src={props.image.urls.small}
                alt={props.image.alt_description || `Photo ${props.image.id}`} />
            <figcaption className="absolute bottom-5 bg-black opacity-70 w-full p-3 image-caption">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <p>by {props.image.user.name}</p>
                        <p>{formattedDate}</p>
                    </div>
                    <div className="flex justify-evenly items-center">
                    {
                        tags.map((tag, index) => 
                            <span 
                                className="mx-1 border rounded p-1 hover:bg-white hover:text-black cursor-pointer h-fit"
                                key={props.image.id + index}
                                onClick={() => searchByTag(tag)}>
                                    {tag}
                            </span>
                        )
                    }
                    </div>
                </div>
            </figcaption>
        </figure>
    )
}

export default ImageCard;