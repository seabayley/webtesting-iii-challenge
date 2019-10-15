import React from 'react';
import { render, fireEvent, act } from '@testing-library/react'

import Controls from './Controls'

test('it renders correctly', () => {
    expect(render(<Controls />)).toMatchSnapshot()
})

test('You can press the lock button if the gate is closed.', () => {
    const toggleLockedMock = jest.fn()
    const toggleClosedMock = jest.fn()
    const locked = false
    const closed = true

    const { getByText } = render(<Controls locked={locked} closed={closed} toggleLocked={toggleLockedMock} toggleClosed={toggleClosedMock} />)
    const lockButton = getByText(/lock gate/i)
    fireEvent.click(lockButton);

    expect(toggleLockedMock).toHaveBeenCalled()
})

test('You cannot press the lock button if the gate is open.', () => {
    const toggleLockedMock = jest.fn()
    const toggleClosedMock = jest.fn()
    const locked = false
    const closed = false

    const { getByText } = render(<Controls locked={locked} closed={closed} toggleLocked={toggleLockedMock} toggleClosed={toggleClosedMock} />)
    const lockButton = getByText(/lock gate/i)
    fireEvent.click(lockButton);

    expect(toggleLockedMock).not.toHaveBeenCalled()
})