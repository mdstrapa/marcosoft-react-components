import { useEffect } from 'react'
import './DynamicTable.css'

interface DynamicListProps {
    headerColumns: string[],
    columnsTypes: string[],
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

const DynamicList : React.FC<DynamicListProps> = ({headerColumns,columnsTypes,data}) => {

    return(
        <div className='table'>
            <HeaderRow columns={headerColumns}/>
            {data.map(r => <Row columnsTypes={columnsTypes} columnsData={r}/> )}
        </div>
    )
}

const HeaderRow : React.FC<HeaderRowProps> = ({columns}) => {
    return (
    <div className='row-header-container' key={columns[0]}>
        {columns.map((c,index) => <div key={index}>{c}</div>)}
    </div>
    )
}

const Row :React.FC<RowProps> = ({columnsTypes,columnsData}) => {
    return (
        <div className='row-container' key={columnsData[0]} >
            {columnsData.map(function(c,index)
            {
                if (columnsTypes[index] == "link"){
                    return <LinkCell content={c} />
                }else{
                    return <TextCell content={c}/>
                }
            }
            )}
        </div>
    )
}

const TextCell : React.FC<CellProps> = ({content}) => {
    return (
        <div>{content}</div>
    )
}

const LinkCell : React.FC<CellProps> = ({content}) => {
    return (
        <div><a href={'/someLink/' +  content} >{content}</a></div>
    )
}

export default DynamicList;