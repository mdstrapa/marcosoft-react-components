import './App.css';
import {DynamicTableDemo} from './demo/DynamicTableDemo';
import {SimpleListDemo} from './demo/SimpleListDemo';
import {FormattedMessageDemo} from './demo/FormattedMessageDemo';
import {LoadingDemo} from "./demo/LoadingDemo";
import {HorizontalListDemo} from "./demo/HorizontalListDemo";
import {CardDemo} from "./demo/CardDemo";
import {Route, Routes} from 'react-router-dom';
import Init from './Init';
import PageHeader from "./common/PageHeader";
import PageFooter from "./common/PageFooter";

function App() {

    return (
        <main>
            <div id="body">
                <PageHeader/>
                <div id="main">
                    <Routes>
                        <Route path="/" element={<Init/>}/>
                        <Route path="/dynamicTableDemo" element={<DynamicTableDemo/>}/>
                        <Route path="/simpleListDemo" element={<SimpleListDemo/>}/>
                        <Route path="/formattedMessageDemo" element={<FormattedMessageDemo/>}/>
                        <Route path="/loadingDemo" element={<LoadingDemo/>}/>
                        <Route path="/horizontalListDemo" element={<HorizontalListDemo/>}/>
                        <Route path="/cardDemo" element={<CardDemo/>}/>
                    </Routes>
                </div>
                <PageFooter/>
            </div>
        </main>
    );
}

export default App;
