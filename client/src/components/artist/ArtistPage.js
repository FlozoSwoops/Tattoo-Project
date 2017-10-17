import React, { Components } from 'react'

class Artist extends Components

const Artist = (props) => {
    const deleteArtist = () => {
      props.deleteArtist(props._id)
    }
  
    const handleChange = (event) => {
      props.handleChange(event, props._id)
    }
    const updateArtist = () => {
      props.updateArtist(props._id)
    }
}

return(
    
)
