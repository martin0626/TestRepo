import StarOutlined from "@ant-design/icons/lib/icons/StarOutlined";
import { useState } from "react";
import type { formDataT } from "../../../hooks/useSubmitUser";
import { DownOutlined } from "@ant-design/icons";


export default function ListMainCard({user}: {user: formDataT}){

    const [hiddenItems, setHiddenItems] = useState<Boolean>(true);
    

    return (
        <div className="list-main-content-list-item">
            <div className="list-main-content-list-item-header" onClick={() => setHiddenItems(!hiddenItems)}>
                <StarOutlined />
                <p className="list-main-content-list-item-header-name">{user.name} - {user.city}</p>
                <DownOutlined  className={hiddenItems ? "list-main-content-list-item-header-icon-closed" : "list-main-content-list-item-header-icon-open"}/>
            </div>
            <div className={hiddenItems ? "list-main-content-list-item-main-hidden" : "list-main-content-list-item-main"}>

                <p className="list-main-content-list-item-main-coss-left"><span>Над</span> 2.44</p>

                <p className="list-main-content-list-item-main-coss-mid">3.5</p>
                
                <p className="list-main-content-list-item-main-coss-right "><span>Под</span> 2.44</p>

            </div>
        </div>
    )
}