import PageHeader from "./common/PageHeader";

const Init = () => {
    return(
        <div id="body">
            <PageHeader />
            <div id="main">
                <br/>
                <h6>Click to see more details about each component:</h6>
                <ul>
                    <li><a href="/dynamicTableDemo">Dynamic Table</a></li>
                    <li><a href="/simpleListDemo">Simple List</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Init;