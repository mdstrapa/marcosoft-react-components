import PageHeader from "./common/PageHeader";

const Init = () => {
    return(
        <div id="body">
            <PageHeader />
            <div id="main">
                <br/>
                <h6>Click to see more details about each component:</h6>
                <ul>
                    <li><a href="/dynamicTableDemo">&lt;DynamicTable&gt;</a></li>
                    <li><a href="/simpleListDemo">&lt;SimpleList&gt;</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Init;