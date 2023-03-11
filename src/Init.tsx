import PageHeader from "./common/PageHeader";
import PageFooter from "./common/PageFooter";
import 'bootstrap/dist/css/bootstrap.css';
import {MSComponentCard} from "./components/MSComponentCard";

import {MSDynamicTableInfo} from "./common/ComponentInfo"
import {MSFormattedMessageInfo} from "./common/ComponentInfo"
import {MSHorizontalListInfo} from "./common/ComponentInfo"
import {MSLoadingInfo} from "./common/ComponentInfo"
import {MSSimpleListInfo} from "./common/ComponentInfo"

const Init = () => {
    return (
        <div id="body">
            <PageHeader/>
            <div id="main">
                <center>
                    <br/>
                    <h3>Welcome to the MarcoSoft React Components Library!</h3>
                    <br/>
                    <h5>Here you will find information about each available component.</h5>
                </center>
                <div className="container px-4 py-5" id="hanging-icons">
                    <h5 className="pb-2 border-bottom">Click to see more See Details</h5>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <MSComponentCard componentName={MSDynamicTableInfo.componentName}
                                         componentDescription={MSDynamicTableInfo.componentDescription}
                                         link="/dynamicTableDemo"/>
                        <MSComponentCard componentName={MSFormattedMessageInfo.componentName}
                                         componentDescription={MSFormattedMessageInfo.componentDescription}
                                         link="/formattedMessageDemo"/>
                        <MSComponentCard componentName={MSHorizontalListInfo.componentName}
                                         componentDescription={MSHorizontalListInfo.componentDescription}
                                         link="/horizontalListDemo"/>
                    </div>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <MSComponentCard componentName={MSLoadingInfo.componentName}
                                         componentDescription={MSLoadingInfo.componentDescription}
                                         link="/loadingDemo"/>
                        <MSComponentCard componentName={MSSimpleListInfo.componentName}
                                         componentDescription={MSSimpleListInfo.componentDescription}
                                         link="/simpleListDemo"/>
                    </div>
                </div>
            </div>
            <PageFooter/>
        </div>
    )
}

export default Init;