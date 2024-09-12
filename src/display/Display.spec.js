import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { initialState, reducer } from '../reducers'
import { render, fireEvent, act } from '@testing-library/react'

import Display from './Display'

function renderWithRedux(
    ui,
    { initialState, store = createStore(reducer, initialState) } = {}
) {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        store,
    }
}

test('it renders correctly', () => {
    expect(renderWithRedux(<Display />)).toMatchSnapshot()
})

test('renders with an initial value of open as true', () => {
    const { getByText } = renderWithRedux(<Display />)
    getByText(/Open/i)
})

test('renders with an initial value of locked as false', () => {
    const { getByText } = renderWithRedux(<Display />)
    getByText(/Unlocked/i)
})

test('Displays closed if closed is true', () => {
    const customState = { closed: true, locked: true }
    const { getByText } = renderWithRedux(<Display />, { initialState: customState })
    getByText(/Closed/i)
})

test('Displays locked if locked is true', () => {
    const customState = { closed: true, locked: true }
    const { getByText } = renderWithRedux(<Display />, { initialState: customState })
    getByText(/Locked/i)
})

test('Displays open if closed is false', () => {
    const customState = { closed: false, locked: false }
    const { getByText } = renderWithRedux(<Display />, { initialState: customState })
    getByText(/Open/i)
})

test('Displays unlocked if locked is false', () => {
    const customState = { closed: true, locked: false }
    const { getByText } = renderWithRedux(<Display />, { initialState: customState })
    getByText(/Unlocked/i)
})