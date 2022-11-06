import React, { useEffect, useState } from 'react'

function Pag({ pages = 7, setCurrentPage }) {
  const numberOfPages = []
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i)
  }
  const [CurrentButton, setCurrentButton] = useState(1)
  const [arrOfCurrButtons, setArrCurrButtons] = useState([])

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons]

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages
    } else if (CurrentButton >= 1 && CurrentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, 5, 6]
    }

    setArrCurrButtons(tempNumberOfPages)
    setCurrentPage(CurrentButton)
  }, [CurrentButton])

  return (
    <>
      <main className='pagination-container'>
        <button
          className={`${CurrentButton === 1 ? 'disabled' : ''}`}
          onClick={() =>
            setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1))
          }
        >
          Prev
        </button>

        {arrOfCurrButtons.map((item, index) => {
          return (
            <button
              key={index}
              className={`${CurrentButton === item ? 'active' : ''}`}
              onClick={() => setCurrentButton(item)}
            >
              {item}
            </button>
          )
        })}
        <button
          className={`${
            CurrentButton === numberOfPages.length ? 'disabled' : ''
          }`}
          onClick={() =>
            setCurrentButton((Next) =>
              Next >= numberOfPages.length ? Next : Next + 1
            )
          }
        >
          Next
        </button>
      </main>
    </>
  )
}

export default Pag
