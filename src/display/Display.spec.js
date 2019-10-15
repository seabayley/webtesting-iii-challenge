import React from 'react';
import { render, fireEvent, act } from '@testing-library/react'

import Display from './Display'

test('it renders correctly', () => {
    expect(render(<Display />)).toMatchSnapshot()
})

test('Displays closed if closed prop is true', () => {
    const locked = true
    const closed = true

    const { getByText } = render(<Display locked={locked} closed={closed} />)
    getByText(/Closed/i)
})

test('Displays locked if locked prop is true', () => {
    const locked = true
    const closed = true

    const { getByText } = render(<Display locked={locked} closed={closed} />)
    getByText(/Locked/i)
})

test('Displays open if closed prop is false', () => {
    const locked = false
    const closed = false

    const { getByText } = render(<Display locked={locked} closed={closed} />)
    getByText(/open/i)
})

test('Displays unlocked if locked prop is false', () => {
    const locked = false
    const closed = true

    const { getByText } = render(<Display locked={locked} closed={closed} />)
    getByText(/Closed/i)
})