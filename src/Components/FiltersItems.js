import '../Style/Filters.css';
import { SubjectItems } from './SubjectsItems';


export function FiltersItems({ filter, deleteFilter}) {
    if(filter.length)
        return <div className='filtersPanel'>
            <SubjectItems filterSubjects={filter} deleteFilter={deleteFilter}/>
        </div>
    return <></>;
}

//     return <>{filter.length && <div className='filtersPanel'>
//     <SubjectItems filterSubjects={filter} />
// </div>}</>