interface MSDynamicTableProps {
    headerColumns: string[]
    columnsTypes: ColumnType[]
    data: string[][]
}

export enum ColumnType {
    LINK,TEXT,IMAGE
}

interface HeaderRowProps {
    columns: string[]
}

interface RowProps {
    columnsTypes: ColumnType[]
    columnsData: string[]
}

interface CellProps {
    content: string;
}

const MSDynamicTable : React.FC<MSDynamicTableProps> = ({headerColumns,columnsTypes,data}) => {

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
                switch (columnsTypes[index]){
                    case ColumnType.LINK:
                        return <LinkCell content={c} key={index}/>
                    case ColumnType.TEXT:
                        return <TextCell content={c} key={index}/>
                    case ColumnType.IMAGE:
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
        <td><img src={content}/></td>
    )
}

export default MSDynamicTable;