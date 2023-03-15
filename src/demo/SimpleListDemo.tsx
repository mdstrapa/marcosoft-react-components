import {MSSimpleList} from "../components/MSSimpleList";
import DemoPageHeader from "../common/DemoPageHeader";
import {MSSimpleListInfo} from "../common/ComponentInfo"

export const SimpleListDemo = () => {

    const simpleList1 = ["Dolar", "Real", "Pound", "Euro", "Peso"]
    const simpleList2 = ["Guitar", "Piano", "Keyboard", "Drums", "Bass", "Sax", "Marimba", "Organ", "Percussion"]
    const simpleList2Links = ["/link1", "/link2", "/link3", "/link4", "/link5", "/link6", "/link7", "/link8", "/link9"]

    return (
        <div>
            <DemoPageHeader
                componentName={MSSimpleListInfo.componentName}
                componentDescription={MSSimpleListInfo.componentDescription}
                componentPropsNames={MSSimpleListInfo.propsNames}
                componentPropsDescription={MSSimpleListInfo.propsDescriptions}
            />
            <h6>1 - A simple list:</h6>
            <MSSimpleList items={simpleList1} links={[]}/>
            <br/><br/>
            <h6>2 - A simple list with links:</h6>
            <MSSimpleList items={simpleList2} links={simpleList2Links}/>
        </div>
    )
}