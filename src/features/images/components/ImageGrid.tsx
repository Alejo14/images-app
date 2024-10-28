import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../state/hooks"
import { fetchRandom } from "../state/imageSlice";
import { Image, ImageGridProps } from "../types/imageTypes";
import ImageCard from "./ImageCard";
import { useLocation } from "react-router-dom";

const ImageGrid: React.FC<ImageGridProps> = (props: ImageGridProps) => {
    const dispatch = useAppDispatch();
    const { images, status, error } = useAppSelector(state => state.images);
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/') {
            dispatch(fetchRandom(''));
        }
    }, [location.pathname, dispatch]);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }
    
    if (status === 'failed') {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="w-fit">
            <h2 className="text-left font-bold">{props.subtitle}</h2>
            { images.map((image: Image) =>
                <ImageCard key={image.id} image={image}></ImageCard>
            )}
        </div>
    )
}

export default ImageGrid;