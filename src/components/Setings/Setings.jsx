import React, {useState} from "react";

const Settings = () => {
    const [cockLength, cockLengthSet] = useState(0);
    return (
        <div>
            <input type="range" min="0" max="10" name="cock-length"/>
            <label>Cock length in cm</label>
        </div>
    )
}

export default Settings