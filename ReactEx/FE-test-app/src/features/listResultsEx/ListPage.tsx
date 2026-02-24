import MenuItem from "./MenuItem/MenuItem";
import ListMainHeader from "./MainElements/MainHeader";
import ListMain from "./MainElements/ListMain";

export default function ListPage(){
    

    
    return (
        <section className="listPage">
            <header className="list-header">
                <h1 className="list-title">List of Registered Users</h1>
            </header>
            <aside className="list-menu">
                <ul className="list-menu-list">
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                </ul>
            </aside>
            <main className="list-main">
                <ListMainHeader/>
                <ListMain/>
            </main>
        </section>
    );
};