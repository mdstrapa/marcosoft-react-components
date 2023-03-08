import PageHeader from "../common/PageHeader";

interface DemoPageHeaderProps{
    componentName: string
}

const DemoPageHeader:React.FC<DemoPageHeaderProps> = ({componentName}) => {
    return(
        <div id="demoPageHeader">
            <br/>
            <h5>This page demonstrates the <span className="componentName">&lt;{componentName}&gt;</span> component capabilities</h5>
            <h6><a href='/'>Go back</a></h6>
            <br/>
        </div>
    )
}

export default DemoPageHeader;