import {MSHorizontalList} from "../components/MSHorizontalList";
import PageHeader from "../common/PageHeader";
import PageFooter from "../common/PageFooter";
import DemoPageHeader from "../common/DemoPageHeader";

import {MSHorizontalListInfo} from "../common/ComponentInfo"

export const HorizontalListDemo = () => {

    const horizontalList1 = ["Red","Blue","Yellow","Brown","Gray","Green","Pink","White","Black","Magenta"]
    const horizontalList2 = ["Dell","Google","Apple","Samsung","Huawei","Microsoft","Asus","HP"]
    const horizontalList2Links = ["/link1","/link2","/link3","/link4","/link5","/link6","/link7","/link8"]

    return(
        <div id="body">
            <PageHeader />
            <div id="main">
                <DemoPageHeader
                    componentName={MSHorizontalListInfo.componentName}
                    componentDescription={MSHorizontalListInfo.componentDescription}
                    componentPropsNames={MSHorizontalListInfo.propsNames}
                    componentPropsDescription={MSHorizontalListInfo.propsDescriptions}
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