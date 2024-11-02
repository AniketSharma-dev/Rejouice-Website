import React from 'react'

const Navbar = ({textRef}) => {
 
  return (
    <>
      <nav className="flex justify-between items-center">
        <h3 className="text-2xl flex space-x-2 cursor-pointer" >
          {["The", "Venture", "Agency․™"].map((word, index) => (
            <span
              key={index}
              ref={(el) => (textRef.current[index] = el)}
              className="inline-block translate-x-full"
            >
              {word}
            </span>
          ))}
        </h3>
        <h3 className="text-2xl hover-underline-animation left" >Menu</h3>
      </nav>
    </>
  )
}

export default Navbar