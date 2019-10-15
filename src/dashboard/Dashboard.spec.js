import React from 'react';
import { render, fireEvent } from '@testing-library/react'

import Dashboard from './Dashboard'

test('it renders correctly', () => {
    expect(render(<Dashboard />)).toMatchSnapshot()
})

test('the lock button is displayed by default', () => {
    const { getByText } = render(<Dashboard />)
    getByText(/lock gate/i)
})

test('the close button is displayed by default', () => {
    const { getByText } = render(<Dashboard />)
    getByText(/close gate/i)
})