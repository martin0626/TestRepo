import ListMainCard from ".././MainElements/ListMainCard";
import { useMemo, useState } from "react";
import LoadingComp from "../../../components/LoadingComponent";
import useFetchFormData from "../../../hooks/useFetchFormData";
import { useAuthToken } from "../../../hooks/useAuthToken";
import type { formDataT } from "../../../types/global";


type NavLinkT = (typeof navLinks)[number];


const navLinks = ["Всички", "Основни", "Голове", "Хендикап", "Първо Полувреме", "Второ Полувреме", "Комбинации", "SSS"] as const;


export default function ListMain(){
    const [selectedNav, setSelectedNav] = useState<NavLinkT>(navLinks[0]);
    const token = useAuthToken();
    const {listData, error, isLoading} = useFetchFormData(token);

    const filteredData = useMemo(() => filterDataNav(listData, selectedNav), [listData, selectedNav]);


    if(isLoading) return <LoadingComp />;
    if(error) return <p className="list-main-content-error">{error.message}</p>;

    return(
        <section className="list-main-content">
            <nav className="list-main-content-nav">
                {navLinks.map((link) => (
                    <p  
                        key={link}
                        className={selectedNav === link ? "list-main-content-nav-link-active" : "list-main-content-nav-link"}
                        onClick={() => setSelectedNav(link)}
                    >
                        {link}
                    </p>
                ))}
            </nav>

            {filteredData.length === 0 ? (
                <p style={{textAlign: "center", margin: "1rem"}}>No data to display...</p>
            ) : 
                <div className="list-main-content-list">
                    <div className="list-main-content-list-col">
                        {filteredData.slice(0, Math.ceil(filteredData.length / 2)).map((user: formDataT) => (
                            <ListMainCard key={user.name} user={user}/>
                        ))}
                    </div>
                    <div className="list-main-content-list-col">
                        {filteredData.slice(Math.ceil(filteredData.length / 2)).map((user: formDataT) => (
                            <ListMainCard key={user.name} user={user}/>
                        ))}
                    </div>
                </div>
            }
        </section>
    );
}



const filterDataNav = (data: formDataT[] | null | undefined, nav: NavLinkT): formDataT[] => {
    if(!data) return [];
    if(nav === "Всички") return data;
    return data.filter((item) => item.city.includes(nav));
};