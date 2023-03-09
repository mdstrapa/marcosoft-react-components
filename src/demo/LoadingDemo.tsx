import MSLoading from "../components/MSLoading";
import PageHeader from "../common/PageHeader";
import DemoPageHeader from "./DemoPageHeader";

const LoadingDemo = () => {

    const customMessage = "Read a book while you wait for the page to load"
    const propsNames = ["customMessage"]
    const propsDescription = ["A custom message to present to the user along with the default behavior. It can be leave empty."]

    return(
        <div id="body">
            <PageHeader />
            <div id="main">
                <DemoPageHeader
                    componentName="MSLoading"
                    componentDescription="A simple loading component"
                    componentPropsNames={propsNames}
                    componentPropsDescription={propsDescription}
                />
                <h6>1 - The default loading:</h6>
                <MSLoading customMessage="" />
                <br/><br/>
                <h6>2 - With a custom message:</h6>
                <MSLoading customMessage={customMessage} />
            </div>
        </div>
    )
}

export default LoadingDemo;