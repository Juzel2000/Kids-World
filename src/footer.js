const Footer = () => {
    let footer_links=[
        {link:"Terms and privacy Notice"},
        {link:"send us Feedback"},
        {link:"help"}
    ]
    return (
        <div className="footer">
            <div className="footer_logo">
                 <img width="200" src="https://cdn.icon-icons.com/icons2/2699/PNG/128/netflix_official_logo_icon_168085.png" alt=""/>
             </div>
            <div className="footer_links">
                {footer_links.map((data)=>{
                
                    return(
                        <a href="">{data.link}</a>
                    )
                })}
            </div>
            <div className="footer_desc">
                <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
      );
}
 
export default Footer;