import React from "react";
import stl from "./404.module.css"


const NotFoundPage = () => {
    return(
        <div className={stl.container}>
            <h1 className={stl.mainText}>
                There is no page here
            </h1>
            <h3>
                so, please, go fuck yourself.
            </h3>
        </div>
    )
}
export default NotFoundPage