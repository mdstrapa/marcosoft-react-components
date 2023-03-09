import PageHeader from "../common/PageHeader";
import MSFormatteMessage from "../components/MSFormattedMessage";
import DemoPageHeader from "./DemoPageHeader";
import PageFooter from "../common/PageFooter";

const FormatteMessageDemo = () => {

    const propsNames = ["message","style"]
    const propsDescription = ["The message to present","The style of the message. Valid values ar: info|warning|success|danger"]

    return(
        <div id="body">
            <PageHeader />
            <div id="main">
                <DemoPageHeader
                    componentName="FormattedMessage"
                    componentDescription="A message automatically formatted based on a given style"
                    componentPropsNames={propsNames}
                    componentPropsDescription={propsDescription}
                />
                
                <h6>1 - A message in the INFO style:</h6>
                <MSFormatteMessage message="This is only an iformation to the user" style="info"/>
                <br/><br/>
                <h6>2 - A message in the WARNING style:</h6>
                <MSFormatteMessage message="This is a message to warn the user about something" style="warning"/>
                <br/><br/>
                <h6>3 - A message of SUCCESS to the user:</h6>
                <MSFormatteMessage message="Operation succeed" style="success"/>
                <br/><br/>
                <h6>4 - A message of DANGER or ERROR to the user:</h6>
                <MSFormatteMessage message="There was an error" style="danger"/>

            </div>
            <PageFooter />
        </div>
    )
}

export default FormatteMessageDemo;