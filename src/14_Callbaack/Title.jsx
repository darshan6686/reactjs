import React from 'react'

const Title = () => {
    console.log("Rendaring title")
  return (
    <div>
      <h1>useCallback hook</h1>
    </div>
  )
}

export default React.memo(Title)