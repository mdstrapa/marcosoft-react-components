import React from "react";

export enum MSLoadingType{
    PULSE, LOAD
}

interface MSLoadingProps {
    type: MSLoadingType
    customMessage?: string
}


export const MSLoading:React.FC<MSLoadingProps> = ({type, customMessage}) => {

    let loadTypeClass;
    switch (type){
        case MSLoadingType.LOAD:
            loadTypeClass = "loadingLoad";
            break
        case MSLoadingType.PULSE:
            loadTypeClass = "loadingPulse";
            break
    }

    const writeCustomMessage = () => {
        if (customMessage != "") {
            return <span className="loadingCustomMessage"><br/><br/>{customMessage}</span>
        }
    }

    return(
        <div id="loading">
            <div className={loadTypeClass}></div>
            <br/>
            Loading...
            {writeCustomMessage()}
        </div>
    )
}