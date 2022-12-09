import React from "react"
import './FinalContent.css';
import EnglishLevel from '../EnglishLevel/EnglishLevel';

const FinalContent = (props) => {
    var textOfLevel = (
        <>
        </>
    );

    if(props.succesfulAnswer > 5){
        textOfLevel = (
          <>
          <EnglishLevel level = "A2"/>
          </>
        );
      }else{
        textOfLevel = (
          <>
          <EnglishLevel level = "A1"/>
          </>
        );
      }
    
    return (
        <div className='final-content'>
            <p>We have succesful answer: {props.succesfulAnswer}</p>
            {textOfLevel}
        <button onClick={props.handlerClickTwo }>Розпочати знову</button>
      </div>
    )
}

export default FinalContent;