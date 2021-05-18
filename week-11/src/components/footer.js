import FooterColumn from "./footerColumn"

const Footer = props => {
    var columnTitles = Object.keys(props.columns);
    return(
    <div className="footer">
        <FooterColumn columnData={props.columns.About} columnTitle={columnTitles[0]}/>
        <FooterColumn columnData={props.columns.Read} columnTitle={columnTitles[1]}/>
        <FooterColumn columnData={props.columns.Write} columnTitle={columnTitles[2]}/>
        <FooterColumn columnData={props.columns.Sponsor} columnTitle={columnTitles[3]}/>
    </div>
    );
}

export default Footer;