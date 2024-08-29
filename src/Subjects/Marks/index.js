import { grades } from "../../grades";
import "./style.css";

function backgroundColor(mark) {
    return grades.find(({ rate }) => rate === mark).backgroundColor;
};

function markText(mark) {
    return grades.find(({ rate }) => rate === mark).name;
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