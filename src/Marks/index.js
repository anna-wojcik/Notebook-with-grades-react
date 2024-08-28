import "./style.css";

function backgroundColor(mark) {
    let backgroundColor;
    if (mark >= 1 && mark < 1.75) {
        backgroundColor = "list__item--mark--backgroundRed";
    } else if (mark >= 1.75 && mark < 2.75) {
        backgroundColor = "list__item--mark--backgroundViolet";
    } else if (mark >= 2.75 && mark < 3.75) {
        backgroundColor = "list__item--mark--backgroundYellow";
    } else if (mark >= 3.75 && mark < 4.75) {
        backgroundColor = "list__item--mark--backgroundBlue";
    } else if (mark >= 4.75 && mark < 5.75) {
        backgroundColor = "list__item--mark--backgroundGreen";
    } else {
        backgroundColor = "list__item--mark--backgroundGreenyYellow";
    }
    return backgroundColor;
};

function markText(mark) {
    let markText;
    if (mark === 1 || mark === 2 || mark === 3 || mark === 4 || mark === 5 || mark === 6) {
        markText = mark;
    } else if (mark === 1.5) {
        markText = "1+";
    } else if (mark === 1.75) {
        markText = "2-";
    } else if (mark === 2.5) {
        markText = "2+";
    } else if (mark === 2.75) {
        markText = "3-";
    } else if (mark === 3.5) {
        markText = "3+";
    } else if (mark === 3.75) {
        markText = "4-";
    } else if (mark === 4.5) {
        markText = "4+";
    } else if (mark === 4.75) {
        markText = "5-";
    } else if (mark === 5.5) {
        markText = "5+";
    } else if (mark === 5.75) {
        markText = "6-";
    }
    return markText;
};

const Marks = ({ subject, toggleShowFormMark, removeMark }) => (
    <ul className="list--marks">
        {subject.marks.map((mark, id) => (
            <li key={id} className={`list__item--mark ${backgroundColor(mark)}`}>
                <div className="list__item--number">{markText(mark)}</div>
                <div className="list__item--test">{subject.testMarks[id]}</div>
                <button
                    className="list__item--buttonDeleteMark"
                    onClick={() => removeMark(subject.id, id)}
                >
                    Usuń
                </button>
            </li>
        ))}
        <button
            className="list__item--buttonAddMark"
            onClick={() => toggleShowFormMark(subject.id)}
        >
        </button>
    </ul>
);

export default Marks;