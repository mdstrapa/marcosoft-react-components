import SimpleList from "../components/SimpleList";
import DemoPageHeader from "./DemoPageHeader";

const SimpleListDemo = () => {

    const simpleList1 = ["Dolar","Real","Pound","Euro","Peso"]

    return(
        <div>
            <DemoPageHeader componentName="SimpleList"/>
            <h6>A simple list:</h6>
            <SimpleList items={simpleList1}/>
        </div>
    )
}
export default SimpleListDemo;