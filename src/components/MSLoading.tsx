import React from "react";

interface MSLoadingProps {
    customMessage: string
}


const MSLoading:React.FC<MSLoadingProps> = ({customMessage}) => {

    const writeCustomMessage = () => {
        if (customMessage != "") {
            return <span className="loadingCustomMessage"><br/><br/>{customMessage}</span>
        }
    }

    return(
        <div id="loading">
            <img src="img/ms_loading.gif" width="150" height="150"/>
            <br/>
            Loading...
            {writeCustomMessage()}
        </div>
    )
}

export default MSLoading;