import FooterColumn from "./footerColumn"

const Footer = props => {
    return(
    <div className="footer">
        <FooterColumn columnData={props.columns.About}/>
        <FooterColumn columnData={props.columns.Read}/>
        <FooterColumn columnData={props.columns.Write}/>
        <FooterColumn columnData={props.columns.Sponsor}/>
    </div>
    );
}

export default Footer;