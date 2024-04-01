import React from 'react'

export default function ButtonGlobal({label,actions,icon}) {
  return (
    <>
      

      <button className="country_button-goback" onClick={actions}>
          <div className="country_button_image_container">
            <img
              src={icon}
              alt="Icon go back"
              className="country_button_image"
            />
          </div>
          <span className="country_button-goback_text">{label}</span>
        </button>

    
    
    </>
  )
}
