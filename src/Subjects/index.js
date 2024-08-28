import "./style.css";
import Marks from "../Marks";
import FormAddMark from "../FormAddMark";

function calculateAverageMark(subject) {
  let sum = 0;
  let counter = 0;
  for (let i = 0; i < subject.marks.length; i++) {
    sum += subject.marks[i] * subject.importanceMarks[i];
    counter += subject.importanceMarks[i];
  }

  if (counter === 0) {
    return 0;
  } else {
    return (sum / counter).toFixed(2);
  }
};

const Subjects = ({ subjects, showFormMarks, toggleShowFormMark, addNewMark, removeMark, removeSubject }) => {
  return (
    <ul className="list">
      {subjects.map(subject => (
        <li key={subject.id}>
          <div className="list__item--backgroundGrey">
            <div>
              <p className="list__item--paragraph">{subject.content}</p>
              <p className="list__item--paragraph">Średnia: {calculateAverageMark(subject)}</p>
              <p className="list__item--paragraph">Oceny</p>
            </div>
            <div className="list__item--containerButton">
              <button
                className="list__item--buttonDeleteSubjet"
                onClick={() => removeSubject(subject.id)}
              >
                ❌
              </button>
            </div>
          </div>
          <Marks subject={subject} toggleShowFormMark={toggleShowFormMark} removeMark={removeMark} />
          <FormAddMark showFormMarks={showFormMarks} id={subject.id} addNewMark={addNewMark} toggleShowFormMark={toggleShowFormMark} />
        </li>
      ))}
    </ul>
  )
};

export default Subjects;