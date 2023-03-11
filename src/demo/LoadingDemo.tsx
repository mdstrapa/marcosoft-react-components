import {MSLoading} from "../components/MSLoading";
import PageHeader from "../common/PageHeader";
import DemoPageHeader from "../common/DemoPageHeader";
import PageFooter from "../common/PageFooter";
import {MSLoadingInfo} from "../common/ComponentInfo"
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
                <h6>1 - The default loading:</h6>
                <MSLoading />
                <br/><br/>
                <h6>2 - With a custom message:</h6>
                <MSLoading customMessage={customMessage} />
            </div>
            <PageFooter />
        </div>
    )
}