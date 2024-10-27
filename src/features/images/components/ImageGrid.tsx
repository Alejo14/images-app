import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../state/hooks"
import { fetchRandom } from "../state/imageSlice";
import { Image } from "../types/imageTypes";
import ImageCard from "./ImageCard";

const ImageGrid: React.FC = () => {
    const dispatch = useAppDispatch();
    const { images, status, error } = useAppSelector(state => state.images);

    useEffect(() => {
        dispatch(fetchRandom(''));
        console.log(images);
    }, [dispatch]);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }
    
    if (status === 'failed') {
        return <p>Error: {error}</p>;
    }

    return (
        <section>
            <h3>Results</h3>
            { images.map((image: Image) =>
                <ImageCard image={image}></ImageCard>
            )}
        </section>
    )
}

export default ImageGrid;