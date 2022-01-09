import { Filter } from './Filters';

export function Employee({ employees, employeesFilter, addFilters }) {
    return employees.map((emp, index) => {
        return (
            <div key={`item-${index}`}>
                <div className='employee'>
                    <div className='emp-info'>
                        <span className='emp-company'>
                            {emp.company}
                        </span>
                        <div className='emp-logo' style={{ background: 'url(' + emp.logo + ')' }}>
                        </div>
                        <div className='emp-position'>
                            {emp.position}
                        </div>
                        <div className='emp-description'>
                            <span>{emp.postedAt}</span>
                            <span>{emp.contract}</span>
                            <span>{emp.location}</span>
                        </div>
                        <div className='languages'>
                            <Filter languages={emp.languages} employeesFilter={employeesFilter} addFilters={addFilters}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
}
