import React from 'react'

const Answer = ({ answer, onAnswer }) => {
  return (
    <div>
      <label>
        <input type={"radio"} name="options" id="option1" onClick={() => onAnswer(answer)} />
        <span dangerouslySetInnerHTML={{ __html: answer }}></span>
      </label>
    </div>
  )
}

export default Answer