import './App.css';
import {useState} from "react";
import {useReducer} from "react";
import Header from './component/Header/Header';
import UserEnter from './component/UserEnter/UserEnter';
import TranslationField from './component/TranslationField/TranslationField/TranslationField';
import FinalContent from './component/FinalContent/FinalContent/FinalContent';

var index = 0;
var succesfulAnswer = 0;
var wrongAnswer = 0;

var listOfWord = [
  { word: 'balls', translation: 'банан'},
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

function App() { 
  const [showMode, setShowMode] = useState(true);
  const [showModeFinal, setShowModeFinal] = useState(true);
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [state, dispatch] = useReducer(reducer, { index, succesfulAnswer, wrongAnswer})
  
  const handlerClick = () => {
    setShowMode(!showMode);
  }

  const handlerClickTwo = () => {
    setShowMode(!showMode);
    setShowModeFinal(!showModeFinal);
    state.succesfulAnswer = 0;
    state.wrongAnswer = 0;
  }

  var content = (
    <>
      <UserEnter inputOne={inputOne} setInputOne={setInputOne} handlerClick={handlerClick}/>
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
      <FinalContent succesfulAnswer={state.succesfulAnswer} handlerClickTwo ={handlerClickTwo}/>
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