import PropTypes from "prop-types";
import styleCss from "./fun.module.css";


export default function Profile({username,tag,location,avatar,stats,instagram}) {
    return (
        <div className={styleCss.profile}>
            <div className={styleCss.description}>
                <img
                src={avatar}
                alt="User avatar"
                className={styleCss.avatar} 
                />
                <p className={styleCss.name}>{username}</p>
                <p className={styleCss.tag}>@{tag}</p>
                <p className={styleCss.location}>{location}</p>
            </div>

            <ul className={styleCss.stats}>
                <li className={styleCss.containerLi}>
                <span className={styleCss.label}>Followers </span>
                <span className={styleCss.quantity}>{stats.followers}</span>
                </li>
                <li className={styleCss.containerLi}>
                <span className={styleCss.label}>Views </span>
                <span className={styleCss.quantity}>{stats.views}</span>
                </li>
                <li className={styleCss.containerLi}>
                <span className={styleCss.label}>Likes </span>
                <span className={styleCss.quantity}>{stats["likes"]}</span>
                </li>
            </ul>
        </div>
    );
  }


Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
    instagram: PropTypes.string,
};