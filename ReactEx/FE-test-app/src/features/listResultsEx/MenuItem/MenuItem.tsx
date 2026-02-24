import { DownOutlined, PieChartOutlined, StarOutlined } from "@ant-design/icons";
import { useState } from "react";
import MenuItemContent from "./MenuItemContent";


export default function MenuItem(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="list-menu-item">
            <div className="item-title" onClick={() => setIsOpen(!isOpen)}>
                <p className="item-title-text" ><PieChartOutlined  className="item-title-icon"/> Open menu to see all asdad asdad asda sdasd</p>
                <p className="item-title-icon"><StarOutlined  /> <span>1</span></p>
                <DownOutlined className={isOpen ? "item-title-actionI-open" : "item-title-actionI-closed"}/>
            </div>
            {isOpen && <MenuItemContent />}
        </li>
    );
}

