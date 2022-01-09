import employees from '../data.js';
import { Employee } from './Employee';
import { useState, useEffect } from 'react';
import '../Style/Employee.css'


export function EmpCointainer({ filterSubjects, addFilter }) {
    const [employeeFiltered, setEmployees] = useState(employees);

    const employeesFilter = () => {
        const filteredEmployee = [];
        let flag = false;
        filterSubjects.forEach((subject) => {
            employees.forEach((emp) => {
                flag = false;
                if (emp.languages.includes(subject)) {
                    filteredEmployee.forEach((empFiltered) => {
                        if(emp.id === empFiltered.id) flag = true;
                    });
                    if(!flag)
                    filteredEmployee.push(emp);
                }
            });
        });
        if(filteredEmployee.length) setEmployees(filteredEmployee);
        else setEmployees(employees);
    }

    const addFilters = (filter) => {
        addFilter(filter);
    }

    useEffect(() => {
         employeesFilter();
    }, [filterSubjects])

    return <div className="employees-container"><Employee employees={employeeFiltered} employeesFilter={employeesFilter}  addFilters={addFilters}/></div>;
}