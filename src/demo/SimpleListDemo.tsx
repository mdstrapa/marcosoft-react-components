import PageHeader from "../common/PageHeader";
import SimpleList from "../components/SimpleList";
import DemoPageHeader from "./DemoPageHeader";

const SimpleListDemo = () => {

    const simpleList1 = ["Dolar","Real","Pound","Euro","Peso"]

    return(
        <div id="body">
                <PageHeader />
            <div id="main">
                <DemoPageHeader componentName="SimpleList"/>
                <h6>1 - A simple list:</h6>
                <SimpleList items={simpleList1}/>
            </div>
        </div>
    )
}
export default SimpleListDemo;