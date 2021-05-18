const Header = props => {
    return(
    <div className="header">
        <span>Definitely Original Content</span>
        <div className="header-right">
            <input placeholder="Search..."></input>
            <button className="start-writing">Start Writing</button>
            <button className="login">Login</button>
            <img src="https://cdn.mos.cms.futurecdn.net/yyvvM9kwaVGySFE6aXXoJL-970-80.jpg.webp" alt="moon"></img>
        </div>
    </div>
    );
}

export default Header;