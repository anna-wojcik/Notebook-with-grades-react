import { useState } from "react";
import { grades } from "../grades";
import "./style.css"

const FormAddMark = ({ showFormMarks, id, addNewMark, toggleShowFormMark }) => {
    const [mark, setMark] = useState(1);
    const [test, setTest] = useState("");
    const [importance, setImportance] = useState(1);

    const onSetMark = ({ target }) => {
        setMark(Number(target.value));
    }

    const onSetTest = ({ target }) => {
        setTest(target.value);
    }

    const onSetImportance = ({ target }) => {
        setImportance(Number(target.value));
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewMark(mark, test, importance, id);
        toggleShowFormMark(id);
        setMark(1);
        setTest("");
        setImportance(1);
    }

    if (showFormMarks[id - 1]) {
        return (
            <form
                className="form--addMark"
                onSubmit={onFormSubmit}
            >
                <p>
                    <label>
                        <span className="form__labelText">
                            Ocena:
                        </span>
                        <select
                            className="form__field"
                            value={mark}
                            onChange={onSetMark}
                        >
                            {grades.map(({ name, rate }) => (
                                <option
                                    key={rate}
                                    value={rate}
                                >
                                    {name}
                                </option>
                            ))}
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">
                            *Otrzmano za:
                        </span>
                        <input
                            className="form__field"
                            required
                            value={test}
                            onChange={onSetTest}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">
                            Waga oceny:
                        </span>
                        <select
                            className="form__field"
                            value={importance}
                            onChange={onSetImportance}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </label>
                </p>
                <button className="form__button--addMark">DODAJ OCENĘ</button>
            </form>
        )
    }
};

export default FormAddMark;