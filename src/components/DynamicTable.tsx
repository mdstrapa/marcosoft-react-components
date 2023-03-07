import 'bootstrap/dist/css/bootstrap.css';

interface DynamicTableProps {
    headerColumns: string[]
    columnsTypes: string[]
    data: string[][]
}

interface HeaderRowProps {
    columns: string[]
}

interface RowProps {
    columnsTypes: string[]
    columnsData: string[]
}

interface CellProps {
    content: string;
}

const DynamicTable : React.FC<DynamicTableProps> = ({headerColumns,columnsTypes,data}) => {

    return(
        <div>
            <table className="table table-striped table-hover">
                
                    <HeaderRow columns={headerColumns}/>
                    <tbody>
                        {data.map(function(r,index) {return <Row key={index} columnsTypes={columnsTypes} columnsData={r}/>} )}
                    </tbody>
            </table>
        </div>
    )
}

const HeaderRow : React.FC<HeaderRowProps> = ({columns}) => {
    return (
        <thead>
            <tr>
                {columns.map((c,index) => <th key={index}>{c}</th>)}
            </tr>
        </thead>
    )
}

const Row :React.FC<RowProps> = ({columnsTypes,columnsData}) => {
    return (
        <tr>
            {columnsData.map(function(c,index)
            {
                if (columnsTypes[index] == "link"){
                    return <LinkCell content={c} key={index}/>
                }else if (columnsTypes[index] == "text"){
                    return <TextCell content={c} key={index}/>
                }else{
                    return <ImageCell content={c} key={index}/>
                }
            }
            )}
        </tr>
    )
}

const TextCell : React.FC<CellProps> = ({content}) => {
    return (
        <td>{content}</td>
    )
}

const LinkCell : React.FC<CellProps> = ({content}) => {
    return (
        <td><a href={content}>Link</a></td>
    )
}

const ImageCell : React.FC<CellProps> = ({content}) => {
    return (
        <td><img src={"/img/person3.png"}/></td>
    )
}

export default DynamicTable;