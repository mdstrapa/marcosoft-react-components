interface SimpleListProps {
    items: string[]
}

const SimpleList:React.FC<SimpleListProps> = ({items}) => {
    return(
        <ul>
            {items.map(i => <li>{i}</li>)}
        </ul>
    )
}

export default SimpleList;