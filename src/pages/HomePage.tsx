import ImageGrid from "../features/images/components/ImageGrid";

const HomePage: React.FC = () => {
    return (
        <section className="flex justify-center align-middle flex-col items-center">
            <ImageGrid subtitle="Trending Photos Right Now"></ImageGrid>
        </section>
    )
}

export default HomePage;