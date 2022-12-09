import './App.css';
import {useState} from "react";
import {useReducer} from "react";
import Header from './component/Header/Header';
import UserEnter from './component/UserEnter/UserEnter/UserEnter';
import TranslationField from './component/TranslationField/TranslationField/TranslationField';
import FinalContent from './component/FinalContent/FinalContent/FinalContent';

var index = 0;
var succesfulAnswer = 0;
var wrongAnswer = 0;

var listOfWord = [];

var easylevelEnglish = ["A1", "A2"];
var mediumlevelEnglish = ["A2", "B1"];
var hardlevelEnglish = ["B1", "B2"];
var levelEnglish = [];

var easy = [
  { word: 'banan', translation: 'банан'},
  { word: 'carrot', translation: 'морковка'},
  { word: 'love', translation: 'любов' },
  { word: 'low', translation: 'низько' },
  { word: 'fast', translation: 'швидко' },
  { word: 'slow', translation: 'повільно' },
  { word: 'apple', translation: 'яблуко' },
  { word: 'vegetable', translation: 'овочі' },
  { word: 'fruit', translation: 'фрукт'},
  { word: 'telephone', translation: 'телефон'},
];

var medium = [
  { word: 'to disturb', translation: 'турбувати'},
  { word: 'to generate', translation: 'генерувати'},
  { word: 'to embed', translation: 'вбудувати' },
  { word: 'to exchange', translation: 'для обміну' },
  { word: 'to correct', translation: 'для виправлення' },
  { word: 'to surrender', translation: 'здаватися' },
  { word: 'to overwhelm', translation: 'щоб перевантажити' },
  { word: 'to absorb', translation: 'поглинати' },
  { word: 'to align', translation: 'вирівняти'},
  { word: 'to withadraw', translation: 'щоб звідвести'},
];

var hard = [
  { word: 'To abhor', translation: 'До огиди'},
  { word: 'To foreshadow', translation: 'Віщувати'},
  { word: 'To yield', translation: 'Щоб поступитися' },
  { word: 'To sustain', translation: 'Підтримувати' },
  { word: 'To nourish', translation: 'Живити' },
  { word: 'To beget', translation: 'Щоб отримати' },
  { word: 'To flourish', translation: 'Щоб процвітати' },
  { word: 'To desist', translation: 'Відмовитися від відповідальності' },
  { word: 'To contemplate', translation: 'Споглядати'},
  { word: 'To foretell', translation: 'Щоб передвіщати'},
];

function App() { 
  const [showMode, setShowMode] = useState(true);
  const [showModeFinal, setShowModeFinal] = useState(true);
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [state, dispatch] = useReducer(reducer, { index, succesfulAnswer, wrongAnswer})
  
  const easyLevel = () => {
    setShowMode(!showMode);
    listOfWord = easy;
    levelEnglish = easylevelEnglish;
  }
  const mediumLevel = () => {
    setShowMode(!showMode);
    listOfWord = medium;
    levelEnglish = mediumlevelEnglish;
  }
  const hardLevel = () => {
    setShowMode(!showMode);
    listOfWord = hard;
    levelEnglish = hardlevelEnglish;
  }
  const handlerClick = () => {
    setShowMode(!showMode);
    setShowModeFinal(!showModeFinal);
    state.succesfulAnswer = 0;
    state.wrongAnswer = 0;
  }

  var content = (
    <>
      <UserEnter inputOne={inputOne} setInputOne={setInputOne} easyLevel={easyLevel} mediumLevel = {mediumLevel} hardLevel = {hardLevel}/>
    </>
  );
  
  var header = (
    <>
      <Header text = "Dictionary"/>
    </>
  );

  function reducer(state, action) {
    switch (action.type) {
      case 'EQUAL':
        if(inputTwo.toLowerCase() === listOfWord[state.index].translation.toLowerCase()) {
          state.succesfulAnswer++;
          state.succesfulAnswer-=0.5;
        }else{
          state.wrongAnswer++;
          state.wrongAnswer-=0.5;
        }
        setInputTwo("");
        return { 
          index: state.index + 1,
          succesfulAnswer: state.succesfulAnswer,
          wrongAnswer: state.wrongAnswer
         };
      default: return state;
    }
  }

  if(state.index > 9){
    state.index = 0;
    setShowMode(!showMode);
    setShowModeFinal(!showModeFinal);
  }

  if(!showMode){
    header = (
      <>
        <Header text = "Welcome, " userName = {inputOne} />
      </>
    );

    content = (
      <>
      <TranslationField word={listOfWord[state.index].word} inputTwo = {inputTwo} setInputTwo={setInputTwo} 
        succesfulAnswer={state.succesfulAnswer} wrongAnswer={state.wrongAnswer} dispatch={dispatch}/>
      </>
    );
  }

  if(!showModeFinal){
    header = (
      <>
        <Header text = "Welcome, " userName = {inputOne} />
      </>
    );
    content = (
      <>
      <FinalContent succesfulAnswer={state.succesfulAnswer} handlerClick ={handlerClick} levelEnglish ={levelEnglish}/>
      </>
    );
  }

  return (
    <div className="app-wrapper">
      {header}
      <div className="app-wrapper-content">
        {content}
      </div> 
    </div>
  );
}

export default App;