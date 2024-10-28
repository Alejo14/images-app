import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../state/hooks"
import { fetchRandom } from "../state/imageSlice";
import { Image, ImageGridProps } from "../types/imageTypes";
import ImageCard from "./ImageCard";
import { useLocation } from "react-router-dom";
import LoadSpin from "../../../components/LoadSpin";
import ErrorMessage from "../../../components/ErrorMessage";
import { setSearchQuery } from "../../search/state/searchSlice";

const ImageGrid: React.FC<ImageGridProps> = (props: ImageGridProps) => {
    const dispatch = useAppDispatch();
    const { images, status, error } = useAppSelector(state => state.images);
    const location = useLocation();

    const fetchDone = useRef(false);

    useEffect(() => {
        if(location.pathname === '/' && !fetchDone.current) {
            dispatch(fetchRandom(''));
            dispatch(setSearchQuery(''))
            fetchDone.current = true;
        }
    }, [location.pathname, dispatch]);

    if (status === 'loading') {
        return <LoadSpin></LoadSpin>;
    }
    
    if (status === 'failed') {
        return <ErrorMessage message={error || ''}></ErrorMessage>;
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