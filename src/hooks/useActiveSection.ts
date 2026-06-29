import { useEffect, useState } from "react";

const useActiveSection = (sectionIds: string[]) => {
    const [activeSection, setActiveSection] = useState<string>("");


    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (!element)  return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting){
                        setActiveSection(id);
                    }
                },
                {
                    rootMargin: "-20% 0px -60% 0px",
                }
            );
            
            observer.observe(element);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect())
        };
    }, [sectionIds]);

    return activeSection;

};

export default useActiveSection;