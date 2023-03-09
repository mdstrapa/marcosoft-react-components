import React from "react";

interface MSHorizontalListProps{
    items: string[]
    links: string[]
}


const MSHorizontalList:React.FC<MSHorizontalListProps> = ({items,links}) => {

    let columnsTemplate: string
    columnsTemplate = ""
    items.map(i => columnsTemplate = columnsTemplate + "1fr ")
    const gridTemplateColumns = columnsTemplate;

    const divStyle = {
        display: "grid",
        gridTemplateColumns
    }

    return(
        <div style={divStyle}>
            {items.map((item,index) => {
                if(links.length==0){
                    return <div>{item}</div>
                }else{
                    return <div><a href={links[index]}>{item}</a></div>
                }
            })}
        </div>
    )
}

export default MSHorizontalList;