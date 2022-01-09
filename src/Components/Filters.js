export const Filter = ({ languages, addFilters }) => {
    return languages.map((language) => (
        <div className='language' key={language} onClick={() => addFilters(language)}>
            {language}
        </div>
    )
    );
}