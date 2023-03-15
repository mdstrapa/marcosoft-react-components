import {MSFormatteMessage, MessageStyle} from "../components/MSFormattedMessage";
import DemoPageHeader from "../common/DemoPageHeader";
import {MSFormattedMessageInfo} from "../common/ComponentInfo"
export const FormattedMessageDemo = () => {

    return(
            <div>
                <DemoPageHeader
                    componentName={MSFormattedMessageInfo.componentName}
                    componentDescription={MSFormattedMessageInfo.componentDescription}
                    componentPropsNames={MSFormattedMessageInfo.propsNames}
                    componentPropsDescription={MSFormattedMessageInfo.propsDescriptions}
                />
                
                <h6>1 - A message in the INFO style:</h6>
                <MSFormatteMessage message="This is only an iformation to the user" style={MessageStyle.INFO}/>
                <br/><br/>
                <h6>2 - A message in the WARNING style:</h6>
                <MSFormatteMessage message="This is a message to warn the user about something" style={MessageStyle.WARNING}/>
                <br/><br/>
                <h6>3 - A message of SUCCESS to the user:</h6>
                <MSFormatteMessage message="Operation succeed" style={MessageStyle.SUCCESS}/>
                <br/><br/>
                <h6>4 - A message of DANGER or ERROR to the user:</h6>
                <MSFormatteMessage message="There was an error" style={MessageStyle.DANGER}/>

            </div>
    )
}