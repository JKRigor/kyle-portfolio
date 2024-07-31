import React from 'react'

function SkillSets({src, p}) {
  return (
    <span>
        <img src={src} alt='checkmark'/>
        <p>{p}</p>
    </span>
  )
}

export default SkillSets