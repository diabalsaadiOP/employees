import { SubjectItems } from './SubjectsItems';
import styles from './styles/FiltersItems.module.css';

export const FiltersItems = ({ filter, deleteFilter }) => {
    return filter.length ?
        <div className={styles.filtersPanel}>
            <SubjectItems filterSubjects={filter} deleteFilter={deleteFilter} />
        </div> : <></>;
}
