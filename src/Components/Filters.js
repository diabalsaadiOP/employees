export function Filter({ languages, addFilters }) {
    return languages.map((language,index) => {
        return (
            <div className='language' key={language} onClick={() => addFilters(language)}>
                {language}
            </div>
        );
    });
}