import { useState } from "react";
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
                            onChange={onSetMark}>
                            <option value="1">1</option>
                            <option value="1.5">1+</option>
                            <option value="1.75">2-</option>
                            <option value="2">2</option>
                            <option value="2.5">2+</option>
                            <option value="2.75">3-</option>
                            <option value="3">3</option>
                            <option value="3.5">3+</option>
                            <option value="3.75">4-</option>
                            <option value="4">4</option>
                            <option value="4.5">4+</option>
                            <option value="4.75">5-</option>
                            <option value="5">5</option>
                            <option value="5.5">5+</option>
                            <option value="5.75">6-</option>
                            <option value="6">6</option>
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