import React from 'react'

 const PopupMap = ({visible}) => {
  if (!visible) return null;

  return (
    <>
      <div className="absolute right-32 top-1/4 z-[999]">
        <div className="max-w-xs rounded-lg p-5 bg-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae?</div>
      </div>
    </>
  )
}

export default PopupMap