import { useState } from "react";
import "./style.css";

const FormAddSubject = ({ showFormSubject, addNewSubject, toggleShowFormSubject }) => {
    const [newSubjectContent, setNewSubjectContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewSubject(newSubjectContent);
        setNewSubjectContent("");
        toggleShowFormSubject();
    };

    const onNewSubjectContentChange = ({ target }) => {
        setNewSubjectContent(target.value);
    }

    if (showFormSubject === true) {
        return (
            <form className="form--addSubject" onSubmit={onFormSubmit}>
                <div className="form--container">
                    <p>
                        <label>
                            <span className="form__labelText">*Nazwa przedmiotu</span>
                            <input
                                className="form__field"
                                value={newSubjectContent}
                                onChange={onNewSubjectContentChange}
                                required
                            />
                        </label>
                    </p>
                </div>
                <button className="form__button--addSubject">DODAJ PRZEDMIOT</button>
            </form>
        );
    }
};

export default FormAddSubject;