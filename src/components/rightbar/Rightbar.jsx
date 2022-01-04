import './rightbar.css';
import {Users} from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {

    const HomeRightbar = () => {
        return(
            <>
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have birthday today
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u)=>(
                        <Online Key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return ( 
            <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Madrid</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/person/9.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">sdsd</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/9.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">erer</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/9.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">fgfg</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/9.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">uyuyu</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/9.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">nmnm</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/9.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">hjhj</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/9.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">ererr</span>
                </div>
            </div>
            </>
         )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
