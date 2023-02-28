// simple test with React Testing Library
// http://localhost:3000/counter

import * as React from 'react'
import { render, fireEvent } from "@testing-library/react"
// 🐨 import the `render` and `fireEvent` utilities from '@testing-library/react'
import Counter from '../../components/counter'


test('counter increments and decrements when the buttons are clicked', () => {
  
const { container } = render (<Counter />)


  // React testing library will return an object of utilities and we can destructure it in this way.
  
  // we are rendering this to our document.body and react testing library will keep track as the divs that are being created and unmounted and the div that it created is removed from the dom,as soon as the test is over, so it does all the cleanup stuff.

  // 🐨 instead of `div` here you'll want to use the `container` you get back
  // from React Testing Library
  const [decrement, increment] = container.querySelectorAll('button')
  const message = container.firstChild.querySelector('div')

  expect(message.textContent).toBe('Current count: 0')
  fireEvent.click(increment)
  expect(message.textContent).toBe("Current count: 1")
  fireEvent.click(decrement)
  expect(message.textContent).toBe("Current count: 0")

 


})
