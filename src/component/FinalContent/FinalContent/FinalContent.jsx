import React from "react"
import style from './FinalContent.module.css';
import EnglishLevel from '../EnglishLevel/EnglishLevel';

const FinalContent = (props) => {
    var textOfLevel = (
        <>
        </>
    );

    if(props.succesfulAnswer > 5){
        textOfLevel = (
          <>
          <EnglishLevel level = {props.levelEnglish[1]}/>
          </>
        );
      }else{
        textOfLevel = (
          <>
          <EnglishLevel level = {props.levelEnglish[0]}/>
          </>
        );
      }
    
    return (
        <div className={style.finalContent}>
            <p>We have succesful answer: {props.succesfulAnswer}</p>
            {textOfLevel}
        <button onClick={props.handlerClick }>Розпочати знову</button>
      </div>
    )
}

export default FinalContent;