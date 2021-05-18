const Subnav = props => {
    let subnavTitles = props.titles.map((title,index)=> {
        return <a key={index} href={"#" + title}>{title}</a>
    })
    return(
    <div className="subnav">
        {subnavTitles}
    </div>
    );
}

export default Subnav;