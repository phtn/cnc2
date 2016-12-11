import React from 'react'

const Title = ({brand}) => {
  return (
    <div>
      <header className="">
        <h3 className="brand">{ brand }</h3>
      </header>
    </div>
  )
}

Title.propTypes = {
  brand: React.PropTypes.string.isRequired
}
export default Title
