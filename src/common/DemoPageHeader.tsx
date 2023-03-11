import React from "react";

interface DemoPageHeaderProps{
    componentName: string
    componentDescription: string
    componentPropsNames: string[]
    componentPropsDescription: string[]
}

const DemoPageHeader:React.FC<DemoPageHeaderProps> = ({componentName,componentDescription,componentPropsNames,componentPropsDescription}) => {

    return(
        <div id="demoPageHeader">
            
            <div>
                <span className="componentName">{componentName}</span>
                <br/>
                <span className="componentDescription">{componentDescription}</span>
            </div>
            <br/>
            <div><b>Props:</b>
                <ul>
                    {componentPropsNames.map((n,index) => <li><span className="propName">{n}:</span> {componentPropsDescription[index]}</li>)}
                </ul>

            </div>
            <br/>
            <div>
                <a href="/" className="btn btn-primary">
                    Go Back
                </a>
            </div>
            <br/>
        </div>
    )
}

export default DemoPageHeader;