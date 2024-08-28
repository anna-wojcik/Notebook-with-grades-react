import "./style.css";

const ButtonAddSubject = ({ toggleShowFormSubject }) => (
    <button
        className="button--renderFormSubject"
        onClick={toggleShowFormSubject}
    >
        DODAJ NOWY PRZEDMIOT
    </button>
);

export default ButtonAddSubject;