import { useEffect, useState } from "react";

function useScroll(altura) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * altura) {
                setIsVisible(true);
            } else {
                setIsVisible(false); 
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return isVisible;
}

export default useScroll;
