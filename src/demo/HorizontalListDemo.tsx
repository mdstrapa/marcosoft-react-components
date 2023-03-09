import MSHorizontalList from "../components/MSHorizontalList";
import PageHeader from "../common/PageHeader";
import PageFooter from "../common/PageFooter";
import DemoPageHeader from "./DemoPageHeader";

const HorizontalListDemo = () => {


    const horizontalList1 = ["Red","Blue","Yellow","Brown","Gray","Green","Pink","White","Black","Magenta"]
    const horizontalList2 = ["Dell","Google","Apple","Samsung","Huawei","Microsoft","Asus","HP"]
    const horizontalList2Links = ["/link1","/link2","/link3","/link4","/link5","/link6","/link7","/link8"]
    const propsNames = ["items","links"]
    const propsDescription = ["The values to create a list","The links associated to each value in the list"]

    return(
        <div id="body">
            <PageHeader />
            <div id="main">
                <DemoPageHeader
                    componentName="MSHorizontalList"
                    componentDescription="A list that can render with or without links horizontally"
                    componentPropsNames={propsNames}
                    componentPropsDescription={propsDescription}
                />
                <h6>1 - A horizontal list:</h6>
                <MSHorizontalList items={horizontalList1} links={[]}/>
                <br/><br/>
                <h6>2 - A horizontal list with links:</h6>
                <MSHorizontalList items={horizontalList2} links={horizontalList2Links}/>
            </div>
            <PageFooter />
        </div>
    )
}

export default HorizontalListDemo;