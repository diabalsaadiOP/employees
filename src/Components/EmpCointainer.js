import employees from '../data.js';
import { Employee } from './Employee';
import { useState, useEffect } from 'react';
// import '../Style/Employee.css';
import styles from './styles/EmpConitainer.module.css';

export const EmpCointainer = ({ filterSubjects, addFilter }) => {
    const [employeeFiltered, setEmployees] = useState(employees);

    const employeesFilter = () => {
        const filteredEmployee = [];
        let flag = false;

        // n^3 we should fix it.
        filterSubjects.forEach((subject) => {
            employees.forEach((emp) => {
                flag = false;

                if (emp.languages.includes(subject)) {
                    filteredEmployee.forEach((empFiltered) => {
                        if (emp.id === empFiltered.id) {
                            flag = true;
                        }
                    });

                    if (!flag) {
                        filteredEmployee.push(emp);
                    }
                }
            });
        });

        if (filteredEmployee.length) {
            setEmployees(filteredEmployee);
        } else {
            setEmployees(employees);
        }
    }

    useEffect(() => {
        employeesFilter();
    }, [filterSubjects])

    return (
        <div className={styles["employees-container"]}>
            <Employee employees={employeeFiltered} employeesFilter={employeesFilter} addFilters={addFilter} />
        </div>
    );
}