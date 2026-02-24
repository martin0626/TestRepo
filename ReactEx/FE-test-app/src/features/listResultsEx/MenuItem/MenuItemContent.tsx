export default function MenuItemContent(){
    return (
        <article className={"list-menu-main"}>
            <div className="list-menu-header">
                <div className="list-menu-title">
                    <p className="list-menu-title-live">LIVE</p>
                    <p className="list-menu-title-time">0:59</p>
                    <p className="list-menu-title-txt">Първа четвърт</p>
                </div>
                <div className="list-menu-team">
                    <p className="list-menu-team-name"><span>X</span> Spain</p>
                    <p className="list-menu-team-count">23</p>
                </div>
                <div className="list-menu-team">
                    <p className="list-menu-team-name"><span>X</span> Bulgaria</p>
                    <p className="list-menu-team-count">3</p>
                </div>
            </div>

            <div className="list-menu-footer">
                <div className="list-menu-footer-coff">
                    <p className="list-menu-footer-coff-n">1</p>
                    <p>2.88</p>
                </div>
                <div className="list-menu-footer-coff">
                    <p className="list-menu-footer-coff-n">X</p>
                    <p>3.88</p>
                </div>
                <div className="list-menu-footer-coff">
                    <p className="list-menu-footer-coff-n">2</p>
                    <p>5.00</p>
                </div>
            </div>
        </article>
    )
}