import DynamicTable from '../components/DynamicTable';
import DemoPageHeader from './DemoPageHeader';

const DynamicTableDemo = () => {

    const headerColumns1 = ["Band","Album Name", "Release Date","Style"]
    const columnTypes1 = ["text","text","text","text"]
    const row1Data = ["Dream Theater", "Awake","1994","Progressive Rock"]
    const row2Data = ["Iron Maiden", "Powerslave","1985", "Rock"]
    const row3Data = ["Angra", "Angles Cry","1993","Melodic Metal"]
    const rowData1 = [row1Data,row2Data,row3Data]

    const headerColumns3 = ["#","Country Name", "Capital","Polpulation","Continent","Rank Position","Spoken Language"]
    const columnTypes3 = ["link","text","text","text","text", "text","text","text"]
    const row7Data = ["/someLinkTable3/1","Brazil", "Brasilia","200 Milion","South America","7º","Portuguese"]
    const row8Data = ["/someLinkTable3/2","Italy", "Rome","60 Milion", "Europe","9º","Italian"]
    const row9Data = ["/someLinkTable3/3","South Africa", "Johanesburg","80 Milion","Africa","2º","English"]
    const row10Data = ["/someLinkTable3/4","Mexico", "Mexico City","100 Milion","North America","1º","Spanish"]
    const row11Data = ["/someLinkTable3/5","Germany", "Berlin","120 Milion","Europe","3º","German"]
    const row12Data = ["/someLinkTable3/6","Japan", "Tokyo","250 Milion","Asia","8º","Japanese"]
    const rowData3 = [row7Data,row8Data,row9Data,row10Data,row11Data,row12Data]
   
    const headerColumns4 = ["#","Name","Image", "Civil State"]
    const columnTypes4 = ["link","text","image","text"]
    const row13Data = ["/someLinkTable4/1", "Lucy Jones","/img/person1.png","Married"]
    const row14Data = ["/someLinkTable4/2", "Robson Miller Brown","/img/person2.png","Single"]
    const row15Data = ["/someLinkTable4/3", "Eric Gonzales","/img/person3.png","Divorced"]
    const rowData4 = [row13Data,row14Data,row15Data]

    return(
        <div>
            <DemoPageHeader componentName='DynamicTable'/>
            <h5>A simple table:</h5>
            <DynamicTable headerColumns={headerColumns1} columnsTypes={columnTypes1} data={rowData1} />
            <br/><br/>
            <h5>A table with links and more columns:</h5>
            <DynamicTable headerColumns={headerColumns3} columnsTypes={columnTypes3} data={rowData3} />
            <br/><br/>
            <h5>A table with images:</h5>
            <DynamicTable headerColumns={headerColumns4} columnsTypes={columnTypes4} data={rowData4} />
        </div>
    )
}

export default DynamicTableDemo;