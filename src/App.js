import React from 'react';
import { useState } from 'react';

const App = () => {

  const [poisition , setPosition] = useState({
    x : 0 , y : 0
})

  return (
    <div
      onPointerMove={e => 
        setPosition ({
          x : e.clientX,
          y : e.clientY
        })
      }
      style={{
        poisition : 'relative',
        width : '300px',
        height : '300px',
        background : 'yellow'
      }}
    >
      <div
        style={{
          poisition : 'absolute',
          width : '20px',
          height : '20px',
          borderRadius : '50%',
          background : 'black', 
          top : '-10px',
          left : '-10px',
          transform : `translate(${poisition.x}px , ${poisition.y}px)`
        }}
      >

      </div>
    </div>
  )
}

export default App