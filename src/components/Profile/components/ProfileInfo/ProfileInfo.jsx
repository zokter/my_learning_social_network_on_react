import React from "react";
import StoreContext from "../../../../StoreContext";

const ProfileInfo = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                return(
                    <div>
                        <div>
                            <img src={store.getState().profilePage.bigPic}/>
                        </div>
                        <div>
                            {/*<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/methode/2019/04/13/9d588696-59b2-11e9-bbcc-84176f6dd1e7_image_hires_182931.JPG?itok=M4OVKq5j&v=1555151377"/>*/}
                            ava + description
                        </div>
                    </div>
                )
            }}
        </StoreContext.Consumer>

    )
}

export default ProfileInfo