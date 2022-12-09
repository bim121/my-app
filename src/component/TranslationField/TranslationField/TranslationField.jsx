import React from "react"
import style from './TranslationField.module.css';
import Card from "../Card/Card";
import TranslationFieldCount from "../TranslationFieldCount/TranslationFieldCount";
import TranslationFieldEnter from "../TranslationFieldEnter/TranslationFieldEnter";

const TranslationField = (props) => {
    return (
        <div className={style.translationfield}>
            <Card word = {props.word}/>
            <TranslationFieldEnter inputTwo={props.inputTwo} setInputTwo={props.setInputTwo}/>
            <TranslationFieldCount succesfulAnswer={props.succesfulAnswer} wrongAnswer={props.wrongAnswer}/>
            <button onClick={() => props.dispatch({type: 'EQUAL'})}>Перевірити</button>
      </div>
    )
}

export default TranslationField ;