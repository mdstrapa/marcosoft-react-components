import PageHeader from "./common/PageHeader";
import MSSimpleList from "./components/MSSimpleList";

const Init = () => {

    const componentList = ["<MSDynamicTable>","<MSFormattedMessage>","<MSLoading>","<MSSimpleList>"]
    const componentLinks = ["/dynamicTableDemo","/formattedMessageDemo","/loadingDemo","/simpleListDemo"]

    return(
        <div id="body">
            <PageHeader />
            <div id="main">
                <br/>
                <h5>Welcome to the MarcoSoft React Components Library!</h5>
                <br/>
                <h6>Here you will find information about each available component.</h6>
                <br/>
                <h6>Click to see more details:</h6>
                <MSSimpleList items={componentList} links={componentLinks}/>
            </div>
        </div>
    )
}

export default Init;