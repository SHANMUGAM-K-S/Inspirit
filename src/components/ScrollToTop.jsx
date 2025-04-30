import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Ensuring the scroll happens after the page is rendered
        const rootElement = document.getElementById("root") || document.body;

        // Scroll to top of the page/container
        rootElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto" // or "smooth" for smooth scrolling
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
