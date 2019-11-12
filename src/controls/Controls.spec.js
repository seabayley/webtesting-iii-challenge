import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { initialState, reducer } from '../reducers'
import { render, fireEvent, act } from '@testing-library/react'

import Controls from './Controls'

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
    expect(renderWithRedux(<Controls />)).toMatchSnapshot()
})

test('You can press the lock button if the gate is closed.', () => {
    const { getByTestId, getByText } = renderWithRedux(<Controls />)
    fireEvent.click(getByText('Lock Gate'))
})

test('You cannot press the lock button if the gate is open.', () => {
    const customState = { initialState: { closed: false, locked: false } }
    const { getByTestId, getByText } = renderWithRedux(<Controls />, customState)
    const button = getByText('Lock Gate')
    fireEvent.click(button)
    button.innerHTML.includes('disabled=""')
})