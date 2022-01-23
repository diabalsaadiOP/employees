export const SubjectItems = ({ filterSubjects, deleteFilter }) => {
    return filterSubjects.map((subject) => (
        <div className="subject" key={subject} onClick={() => deleteFilter(subject)}>{subject}</div>
    )
    );
}