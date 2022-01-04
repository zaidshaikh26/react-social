import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
    return (
        <>
        <Topbar />
        <div className="profile">
            <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="assets/post/4.jpg" className="profileCoverImg" alt="" />
                        <img src="assets/person/7.jpg" className="profileUserImg" alt="" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">asda da d</h4>
                        <span className="profileInfoDesc">wwe wewew ee e ewe e wew</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed />
                    <Rightbar profile/>
                </div>
            </div>
        </div>
        
        </>
    )
}
