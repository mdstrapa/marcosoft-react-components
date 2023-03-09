interface DemoPageHeaderProps{
    componentName: string
    componentDescription: string
    componentPropsNames: string[]
    componentPropsDescription: string[]
}

const DemoPageHeader:React.FC<DemoPageHeaderProps> = ({componentName,componentDescription,componentPropsNames,componentPropsDescription}) => {
    // @ts-ignore
    return(
        <div id="demoPageHeader">
            
            <div><span className="componentName">&lt;{componentName}&gt;</span><span className="componentDescription"> - {componentDescription}</span></div>
            <br/>
            <div><b>Props:</b>
                <ul>
                    {componentPropsNames.map((n,index) => <li><span className="propName">{n}:</span> {componentPropsDescription[index]}</li>)}
                </ul>

            </div>
            <br/>
            <div><h6><a href='/'>Go back</a></h6></div>
            <br/>
        </div>
    )
}

export default DemoPageHeader;