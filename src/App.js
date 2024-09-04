import { useEffect, useState } from "react";
import Header from "./Header";
import Subjects from "./Subjects";
import ButtonAddSubject from "./ButtonAddSubject";
import FormAddSubject from "./FormAddSubject";
import Footer from "./Footer";

function App() {
  const [showFormSubject, setShowFormSubject] = useState(false);
  const [subjects, setSubjects] = useState(JSON.parse(localStorage.getItem("subjects")) || []);
  const [showFormMarks, setShowFormMarks] = useState(Array(subjects.length).fill(false));

  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }, [subjects]);

  const toggleShowFormSubject = () => {
    setShowFormSubject(showFormSubject => !showFormSubject);
  };

  const toggleShowFormMark = (id) => {
    const newShowFormMarks = [...showFormMarks];
    newShowFormMarks[id - 1] = !newShowFormMarks[id - 1];
    setShowFormMarks(newShowFormMarks);
  };

  const addNewSubject = (newSubjectContent) => {
    setSubjects(subjects => [
      ...subjects,
      {
        content: newSubjectContent,
        marks: [],
        testMarks: [],
        importanceMarks: [],
        id: subjects.length === 0 ? 1 : subjects[subjects.length - 1].id + 1,
      },
    ]);
    setShowFormMarks(showFormMarks => [...showFormMarks, false]);
  };

  const addNewMark = (mark, test, importance, id) => {
    const updatedMarks = [
      ...subjects[id - 1].marks,
      mark
    ];
    const updatedTest = [...subjects[id - 1].testMarks, test];
    const updatedImportance = [...subjects[id - 1].importanceMarks, importance];

    setSubjects(subjects => subjects.map(subject => {
      if (subject.id === id) {
        return {
          ...subject,
          marks: updatedMarks,
          testMarks: updatedTest,
          importanceMarks: updatedImportance
        };
      }
      return subject;
    }));
  };

  const removeMark = (idSubject, index) => {
    const firstTempMarks = [...subjects[idSubject - 1].marks].slice(0, index);
    const secondTempMarks = [...subjects[idSubject - 1].marks].slice(index + 1);
    const updatedMarks = [
      ...firstTempMarks,
      ...secondTempMarks
    ];

    const firstTempTestMarks = [...subjects[idSubject - 1].testMarks].slice(0, index);
    const secondTempTestMarks = [...subjects[idSubject - 1].testMarks].slice(index + 1);
    const updatedTestMarks = [
      ...firstTempTestMarks,
      ...secondTempTestMarks
    ];

    const firstTempImportanceMarks = [...subjects[idSubject - 1].importanceMarks].slice(0, index);
    const secondTempImportanceMarks = [...subjects[idSubject - 1].importanceMarks].slice(index + 1);
    const updatedImportanceMarks = [
      ...firstTempImportanceMarks,
      ...secondTempImportanceMarks
    ];
    setSubjects(subjects => subjects.map(subject => {
      if (subject.id === idSubject) {
        return {
          ...subject,
          marks: updatedMarks,
          testMarks: updatedTestMarks,
          importanceMarks: updatedImportanceMarks
        };
      }
      return subject;
    }));
  };

  const removeSubject = (idSubject) => {
    setSubjects(subjects => subjects.filter(subject => subject.id !== idSubject));
    setSubjects(subjects => subjects.map(subject => {
      if (subject.id > idSubject) {
        return { ...subject, id: subject.id - 1 };
      };
      return subject;
    }));

    const firstTempShowFormMarks = [...showFormMarks].slice(0, idSubject - 1);
    const secondTempShowFormMarks = [...showFormMarks].slice(idSubject);
    const updatedShowFormMarks = [...firstTempShowFormMarks, ...secondTempShowFormMarks];
    setShowFormMarks(updatedShowFormMarks);
  };

  return (
    <>
      <Header />
      <main>
        <Subjects
          subjects={subjects}
          showFormMarks={showFormMarks}
          toggleShowFormMark={toggleShowFormMark}
          addNewMark={addNewMark}
          removeMark={removeMark}
          removeSubject={removeSubject}
        />
        <div className="container--line">
          <ButtonAddSubject
            toggleShowFormSubject={toggleShowFormSubject}
          />
          <FormAddSubject
            showFormSubject={showFormSubject}
            addNewSubject={addNewSubject}
            toggleShowFormSubject={toggleShowFormSubject}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
