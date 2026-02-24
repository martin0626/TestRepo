import AndroidOutlined from "@ant-design/icons/lib/icons/AndroidOutlined";
import FlagOutlined from "@ant-design/icons/lib/icons/FlagOutlined";
import RiseOutlined from "@ant-design/icons/lib/icons/RiseOutlined";
import FallOutlined from "@ant-design/icons/lib/icons/FallOutlined";

export default function ListMainHeader(){
    return (
        <header className="list-main-header">
            <div className="list-main-header-f">
                <p className="list-menu-title-live">LIVE</p>
                <p className="text-small">Полувреме</p>
                <p className="list-menu-title-time">0:59</p>
            </div>
            <div className="list-main-header-teams">
                <p className="list-main-header-teams-name">Spain <span className="icon-medium"><AndroidOutlined /></span></p>
                <div className="list-main-header-teams-score">
                    3 <span>-</span> 1
                </div>
                <p className="list-main-header-teams-name"><span className="icon-medium"><AndroidOutlined /></span> Bulgaria</p>
            </div>
            <div className="list-main-header-coffs">
                <p className="list-main-header-coffs-coff"><span><FlagOutlined /></span>1 - 8</p>
                <p className="list-main-header-coffs-coff"><span><RiseOutlined /></span>1 - 5</p>
                <p className="list-main-header-coffs-coff"><span><FallOutlined /></span>1 - 3</p>
                <p className="list-main-header-coffs-coff"><span><FlagOutlined /></span>1 - 2</p>
            </div>
        </header>
    )
}