import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { initialState, reducer } from '../reducers'
import { render, fireEvent, act } from '@testing-library/react'

import Dashboard from './Dashboard'

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
    expect(renderWithRedux(<Dashboard />)).toMatchSnapshot()
})

test('the lock button is displayed by default', () => {
    const { getByText } = renderWithRedux(<Dashboard />)
    getByText(/lock gate/i)
})

test('the close button is displayed by default', () => {
    const { getByText } = renderWithRedux(<Dashboard />)
    getByText(/close gate/i)
})

test('It shows if gate is locked or unlocked', () => {
    const { getByText } = renderWithRedux(<Dashboard />)
    getByText(/unlocked/i)
})

test('It shows if gate is open or closed', () => {
    const { getByText } = renderWithRedux(<Dashboard />)
    getByText(/open/i)
})