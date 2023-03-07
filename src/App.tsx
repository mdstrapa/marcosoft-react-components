import './App.css';
import DynamicTableDemo from './demo/DynamicTableDemo';
import SimpleListDemo from './demo/SimpleListDemo';
import {Route, Routes } from 'react-router-dom';
import Init from './Init';

function App() {

  return (
    <main>
        <Routes>
          <Route path="/" element={<Init/>}  />
            <Route path="/dynamicTableDemo" element={<DynamicTableDemo/>} />
            <Route path="/simpleListDemo" element={<SimpleListDemo/>} />
        </Routes>
      </main>
  );
}

export default App;
