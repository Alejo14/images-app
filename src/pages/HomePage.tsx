import SearchBar from "../features/search/components/SearchBar";
import layouts from "../layouts/layout";

const { Header, Footer } = layouts;

const HomePage: React.FC = () => {
    return (
        <>
            <Header></Header>
            <SearchBar placeholder="Search..."></SearchBar>
            <Footer></Footer>
        </>
    )
}

export default HomePage;