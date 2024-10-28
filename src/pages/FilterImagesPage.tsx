import ImageGrid from "../features/images/components/ImageGrid";

const FilterImagesPage: React.FC = () => {
    return (
        <section className="flex justify-center align-middle flex-col items-center">
            <ImageGrid subtitle="Results"></ImageGrid>
        </section>
    )
}

export default FilterImagesPage;