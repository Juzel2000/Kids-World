const Home = () => {
    let images=[
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/752/1000752-v"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2604/742604-v"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3422/753422-v"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4048/674048-v"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2444/792444-v"}
    ]
    return ( 
        <div className="home">
            <div className="poster">
                <img width="1000" height="500" src="https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/3/doraemon-nobita-and-friend-josh-fraser.jpg" alt=" "></img>
            </div>
            <div className="movies_list">
                {images.map((data)=>{
                    return(
                        <img height="375" width="270" src={data.img} alt=""/> 
                    )  
                })}
               
            </div>
        </div>
     );
}
 
export default Home;