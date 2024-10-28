import { useEffect } from "react";

const useRedirectHome = () => {
    useEffect(() => {
        if (window.location.pathname !== '/'){
            window.location.replace('/');
        }
    }, [])
}

export default useRedirectHome;