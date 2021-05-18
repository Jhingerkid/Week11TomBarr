const FooterColumn = props => {
    let footerLines = props.columnData.map((line,index)=> {
        return <a key={index} href={line.link}>{line.displayName}</a>
    })
    return(
    <div className="footer-columns">
        <span>{props.columnTitle}</span>
        {footerLines}
    </div>
    );
}

export default FooterColumn;