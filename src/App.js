import './Components/styles/App.css';
import { Header } from "./Components/Header";
import { EmpCointainer } from './Components/EmpCointainer';
import { FiltersItems } from './Components/FiltersItems';
import { useState } from 'react';

const App = () => {
  const [filterSubjects, setFilterSubjects] = useState([]);
  const addFilter = (subject) => {
    if (!filterSubjects.includes(subject)) {
      setFilterSubjects([...filterSubjects, subject]);
    }
  }

  const deleteFilter = (subject) => {
    const arr = filterSubjects.filter(item => item !== subject);

    setFilterSubjects(arr);
  }

  return (
    <>
      <Header />
      <FiltersItems filter={filterSubjects} deleteFilter={deleteFilter} />
      <EmpCointainer filterSubjects={filterSubjects} addFilter={addFilter} />
    </>
  );
}

export default App;
