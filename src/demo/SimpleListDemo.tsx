import PageHeader from "../common/PageHeader";
import MSSimpleList from "../components/MSSimpleList";
import DemoPageHeader from "./DemoPageHeader";
import PageFooter from "../common/PageFooter";

const SimpleListDemo = () => {

    const simpleList1 = ["Dolar","Real","Pound","Euro","Peso"]
    const simpleList2 = ["Guitar","Piano","Keyboard","Drums","Bass","Sax","Marimba","Organ","Percussion"]
    const simpleList2Links = ["/link1","/link2","/link3","/link4","/link5","/link6","/link7","/link8","/link9"]
    const propsNames = ["items","links"]
    const propsDescription = ["The values to create a list","The links associated to each value in the list"]

    return(
        <div id="body">
                <PageHeader />
            <div id="main">
                <DemoPageHeader
                    componentName="MSSimpleList"
                    componentDescription="A list that can render with or without links"
                    componentPropsNames={propsNames}
                    componentPropsDescription={propsDescription}
                />
                <h6>1 - A simple list:</h6>
                <MSSimpleList items={simpleList1} links={[]}/>
                <br/><br/>
                <h6>2 - A simple list with links:</h6>
                <MSSimpleList items={simpleList2} links={simpleList2Links}/>
            </div>
            <PageFooter />
        </div>
    )
}
export default SimpleListDemo;