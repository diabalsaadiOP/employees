import styles from './styles/SubjectsItems.module.css';

export const SubjectItems = ({ filterSubjects, deleteFilter }) => {
    return filterSubjects.map((subject) => (
        <div className={styles.subject} key={subject} onClick={() => deleteFilter(subject)}>{subject}</div>
    )
    );
}