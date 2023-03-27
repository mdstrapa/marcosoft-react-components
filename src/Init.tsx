import PageHeader from "./common/PageHeader";
import PageFooter from "./common/PageFooter";
import 'bootstrap/dist/css/bootstrap.css';
import {MSCard} from "./components/MSCard";

import {MSButtonsInfo, MSCardInfo} from "./common/ComponentInfo";
import {MSDynamicTableInfo} from "./common/ComponentInfo"
import {MSFormattedMessageInfo} from "./common/ComponentInfo"
import {MSHorizontalListInfo} from "./common/ComponentInfo"
import {MSLoadingInfo} from "./common/ComponentInfo"
import {MSSimpleListInfo} from "./common/ComponentInfo"

const Init = () => {
    return (
        <div>
            <center>
                <br/>
                <h3>Welcome to the MarcoSoft React Components Library!</h3>
                <br/>
                <h5>Here you will find information about each available component.</h5>
            </center>
            <div className="container px-4 py-5" id="hanging-icons">
                <h5 className="pb-2 border-bottom">Click to see more details</h5>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <MSCard title={MSCardInfo.componentName}
                            description={MSCardInfo.componentDescription}
                            link="/cardDemo"/>
                    <MSCard title={MSDynamicTableInfo.componentName}
                            description={MSDynamicTableInfo.componentDescription}
                            link="/dynamicTableDemo"/>
                    <MSCard title={MSFormattedMessageInfo.componentName}
                            description={MSFormattedMessageInfo.componentDescription}
                            link="/formattedMessageDemo"/>
                </div>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <MSCard title={MSHorizontalListInfo.componentName}
                            description={MSHorizontalListInfo.componentDescription}
                            link="/horizontalListDemo"/>
                    <MSCard title={MSLoadingInfo.componentName}
                            description={MSLoadingInfo.componentDescription}
                            link="/loadingDemo"/>
                    <MSCard title={MSSimpleListInfo.componentName}
                            description={MSSimpleListInfo.componentDescription}
                            link="/simpleListDemo"/>
                </div>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <MSCard title={MSButtonsInfo.componentName}
                            description={MSButtonsInfo.componentDescription}
                            link="/buttonsDemo"/>
                </div>
            </div>
        </div>
    )
}

export default Init;