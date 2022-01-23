import '../Style/Filters.css';
import { SubjectItems } from './SubjectsItems';


export const FiltersItems = ({ filter, deleteFilter }) => {
    return filter.length ?
        <div className='filtersPanel'>
            <SubjectItems filterSubjects={filter} deleteFilter={deleteFilter} />
        </div> : <></>;
}
