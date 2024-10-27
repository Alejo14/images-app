import SearchBar from "../features/search/components/SearchBar";
import ImageGrid from "../features/images/components/ImageGrid";
import layouts from "../layouts/layout";

const { Header, Footer } = layouts;

const HomePage: React.FC = () => {
    return (
        <>
            <Header></Header>
            <SearchBar placeholder="Search..."></SearchBar>
            <ImageGrid></ImageGrid>
            <Footer></Footer>
        </>
    )
}

export default HomePage;