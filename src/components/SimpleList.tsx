interface SimpleListProps {
    items: string[]
    links: string[]
}

const SimpleList:React.FC<SimpleListProps> = ({items,links}) => {
    return(
        <ul>
            {items.map(
            function(i,index){
                if(links.length == 0){
                    return <li>{i}</li>
                }else{
                    return <li><a href={links[index]}>{i}</a></li>
                }
            }
            )
            
        }
        </ul>
    )
}

export default SimpleList;