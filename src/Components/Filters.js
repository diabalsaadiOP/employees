import styles from './styles/FiltersItems.module.css';

export const Filter = ({ languages, addFilters }) => {
    return languages.map((language) => (
        <div className={styles.language} key={language} onClick={() => addFilters(language)}>
            {language}
        </div>
    )
    );
}