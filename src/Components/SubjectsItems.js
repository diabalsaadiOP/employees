export function SubjectItems({ filterSubjects, deleteFilter }) {
    return filterSubjects.map((subject) => {
        return <div className="subject" key={subject} onClick={() => deleteFilter(subject)}>{subject}</div>
    });
}