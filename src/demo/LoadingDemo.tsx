import {MSLoading} from "../components/MSLoading";
import PageHeader from "../common/PageHeader";
import DemoPageHeader from "../common/DemoPageHeader";
import PageFooter from "../common/PageFooter";
import {MSLoadingInfo} from "../common/ComponentInfo"
import {MSLoadingType} from "../components/MSLoading";

export const LoadingDemo = () => {

    const customMessage = "Read a book while you wait for the page to load"

    return(
        <div id="body">
            <PageHeader />
            <div id="main">
                <DemoPageHeader
                    componentName={MSLoadingInfo.componentName}
                    componentDescription={MSLoadingInfo.componentDescription}
                    componentPropsNames={MSLoadingInfo.propsNames}
                    componentPropsDescription={MSLoadingInfo.propsDescriptions}
                />
                <h6>1 - The default loading with PULSE:</h6>
                <MSLoading type={MSLoadingType.PULSE} />
                <br/><br/>
                <h6>2 - The default loading with LOAD:</h6>
                <MSLoading type={MSLoadingType.LOAD} />
                <br/><br/>
                <h6>3 - With a custom message:</h6>
                <MSLoading type={MSLoadingType.PULSE} customMessage={customMessage} />
            </div>
            <PageFooter />
        </div>
    )
}