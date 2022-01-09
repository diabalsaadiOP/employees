import './Style/App.css';
import { Header } from "./Components/Header";
import { EmpCointainer } from './Components/EmpCointainer';
import { FiltersItems } from './Components/FiltersItems';
import { useState } from 'react';

function App() {
  const [filterSubjects, setFilterSubjects] = useState([]);
  const newArray = [];

  const addFilter = (subject) => {
    if (!filterSubjects.includes(subject)) {
      newArray.push(subject);
      setFilterSubjects([...newArray, ...filterSubjects]);
    }
  }

  const deleteFilter = (subject) => {
    const arr = filterSubjects.filter(item => item !== subject);
    setFilterSubjects(arr);
  }

  return (<>
    <Header />
    <FiltersItems filter={filterSubjects} deleteFilter={deleteFilter} />
    <EmpCointainer filterSubjects={filterSubjects} addFilter={addFilter} />
  </>);
}

export default App;
