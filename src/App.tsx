import './App.css';
import DynamicTableDemo from './demo/DynamicTableDemo';
import SimpleListDemo from './demo/SimpleListDemo';
import FormatteMessageDemo from './demo/FormattedMessageDemo';
import {Route, Routes } from 'react-router-dom';
import Init from './Init';

function App() {

  return (
    <main>
        <Routes>
          <Route path="/" element={<Init/>}  />
            <Route path="/dynamicTableDemo" element={<DynamicTableDemo/>} />
            <Route path="/simpleListDemo" element={<SimpleListDemo/>} />
            <Route path="/formattedMessageDemo" element={<FormatteMessageDemo/>} />
        </Routes>
      </main>
  );
}

export default App;
