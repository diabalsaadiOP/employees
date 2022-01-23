import { Filter } from './Filters';
import styles from './styles/Employee.module.css';


export const Employee = ({ employees, employeesFilter, addFilters }) => {
    return employees.map((emp, index) => (
        <div key={`item-${index}`}>
            <div className={styles.employee}>
                <div className={styles['emp-info']}>
                    <span className={styles['emp-company']}>
                        {emp.company}
                    </span>
                    <div className={styles['emp-logo']} style={{ background: 'url(' + emp.logo + ')' }}>
                    </div>
                    <div className={styles['emp-position']}>
                        {emp.position}
                    </div>
                    <div className={styles['emp-description']}>
                        <span>{emp.postedAt}</span>
                        <span>{emp.contract}</span>
                        <span>{emp.location}</span>
                    </div>
                    <div className={styles.languages}>
                        <Filter languages={emp.languages} employeesFilter={employeesFilter} addFilters={addFilters} />
                    </div>
                </div>
            </div>
        </div>
    )
    );
}
