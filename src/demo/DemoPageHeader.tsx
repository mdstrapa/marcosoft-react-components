import PageHeader from "../common/PageHeader";

interface DemoPageHeaderProps{
    componentName: string
    componentDescription: string
}

const DemoPageHeader:React.FC<DemoPageHeaderProps> = ({componentName,componentDescription}) => {
    return(
        <div id="demoPageHeader">
            
            <div><span className="componentName">&lt;{componentName}&gt;</span><span className="componentDescription"> - {componentDescription}</span></div>
            <br/>
            <div><h6><a href='/'>Go back</a></h6></div>
            <br/>
        </div>
    )
}

export default DemoPageHeader;