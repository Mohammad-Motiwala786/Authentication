import React from 'react'

const Quetions = ({question}) => {
  return (
    <div><h2>Questions will be shown here</h2>
    <h3 dangerouslySetInnerHTML={{__html: question}}></h3>
    </div>
  )
}

export default Quetions