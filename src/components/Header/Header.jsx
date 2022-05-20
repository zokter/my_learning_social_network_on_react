import React from "react";
import stl from "./Header.module.css"

const Header = () => {
    {/*от эти новые теги из ES5 учитываются при поиске в поисковиках*/}
    return(<header className={stl.header}>
        <img
            src="https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/64256/optimized_large_thumb_stage.jpg" />
    </header>);
}

export default Header;