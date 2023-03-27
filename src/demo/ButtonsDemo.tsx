import {MSButtons, MSButtonStyle} from "../components/MSButtons";
import DemoPageHeader from "../common/DemoPageHeader";
import {MSButtonsInfo} from "../common/ComponentInfo";

export const ButtonsDemo =() => {

    const primaryAction = () => { alert("This is the PRIMARY ACTION") }
    const secondaryAction = () => { alert("This is the SECONDARY ACTION") }
    const successAction = () => { alert("This is the action for a SUCCESS") }
    const errorAction = () => { alert("This is the action for an ERROR") }

    const labels1 = ["Primary Action","Secondary Action","For a success result","For an error result"]
    const styles1 = [MSButtonStyle.PRIMARY,MSButtonStyle.SECUNDARY,MSButtonStyle.SUCCESS,MSButtonStyle.ERROR]
    const actions1 = [primaryAction,secondaryAction,successAction,errorAction]


    const saveAction = () => { alert("This will save the form information") }
    const cancelAction = () => { alert("This will cancel the operation") }

    const labels2 = ["Save","Cancel"]
    const styles2 = [MSButtonStyle.PRIMARY,MSButtonStyle.SECUNDARY]
    const actions2 = [saveAction,cancelAction]


    const saveToDatabase = () => { alert("This will save the form data to database") }
    const goBack = () => { alert("This will cancel and go to the last page") }
    const seeMoreInformation = () => { alert("This will show to the user more information") }
    const addAttach = () => { alert("This will allow the user to attach files") }
    const deleteRecord = () => { alert("This will delete the record from the database") }

    const labels3 = ["Save to database","Go back","See more information", "Add attach","Delete record"]
    const styles3 = [MSButtonStyle.PRIMARY,MSButtonStyle.SECUNDARY,MSButtonStyle.SECUNDARY,MSButtonStyle.SECUNDARY,MSButtonStyle.ERROR]
    const actions3 = [saveToDatabase,goBack,seeMoreInformation,addAttach,deleteRecord]

    return(
        <div>
            <DemoPageHeader
                componentName={MSButtonsInfo.componentName}
                componentDescription={MSButtonsInfo.componentDescription}
                componentPropsNames={MSButtonsInfo.propsNames}
                componentPropsDescription={MSButtonsInfo.propsDescriptions}
            />
            <h5>ATTENTION: for the sake of this demo all the button's actions launch only alert messages </h5>
            <br/><br/>
            <h6>1 - A set of buttons with all the available styles:</h6>
            <MSButtons labels={labels1} styles={styles1} actions={actions1}></MSButtons>
            <br/><br/>
            <h6>2 - A simple form buttons:</h6>
            <MSButtons labels={labels2} styles={styles2} actions={actions2}></MSButtons>
            <br/><br/>
            <h6>3 - Another example of a set of buttons:</h6>
            <MSButtons labels={labels3} styles={styles3} actions={actions3}></MSButtons>
            <br/><br/>
        </div>
    )
}