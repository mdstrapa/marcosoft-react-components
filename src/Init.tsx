import PageHeader from "./common/PageHeader";
import SimpleList from "./components/SimpleList";

const Init = () => {

    const componentList = ["<DynamicTable>","<SimpleList>","<FormattedMessage>"]
    const componentLinks = ["/dynamicTableDemo","/simpleListDemo","/formattedMessageDemo"]

    return(
        <div id="body">
            <PageHeader />
            <div id="main">
                <br/>
                <h5>Welcome to the MarcoSoft React Component Library!</h5>
                <br/>
                <h6>Here you will find information about each available component.</h6>
                <br/>
                <h6>Click to see more details:</h6>
                <SimpleList items={componentList} links={componentLinks}/>
            </div>
        </div>
    )
}

export default Init;