interface DemoPageHeaderProps{
    componentName: string
}

const DemoPageHeader:React.FC<DemoPageHeaderProps> = ({componentName}) => {
    return(
        <div>
            <h3>This page demonstrates the {componentName} component capabilities</h3>
            <br/>
            <h6><a href='/'>Go back</a></h6>
            <br/>
        </div>
    )
}

export default DemoPageHeader;