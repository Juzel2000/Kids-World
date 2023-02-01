const Addfav = () => {
    return ( 
        <div className="add">
            <div class="form">
                <img width="100px" src="https://cdn.icon-icons.com/icons2/2699/PNG/128/netflix_official_logo_icon_168085.png" alt=""/>
                
                <form action="">
                    <input type="text" placeholder="title"/>
                    <input type="text" placeholder="genre"/>
                    <input type="text" placeholder="language"/>
                    <input type="number" min="0" max="10" placeholder="rating"/>
                    <button id="btn">Add</button>
                </form>   
            </div>
            <div class="content">
                <h1>Add your favourites movies<br></br>
                 and Tv shows</h1>
            </div>
        </div>
     );
}
 
export default Addfav;