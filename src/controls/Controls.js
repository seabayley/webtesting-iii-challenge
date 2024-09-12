import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

export default () => {
  const dispatch = useDispatch()
  const { locked, closed } = useSelector(state => state)

  return (
    <div className="controls panel">
      <button disabled={!closed} onClick={() => dispatch({ type: 'TOGGLE_LOCK' })} className="toggle-btn">
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>
      <button disabled={locked} onClick={() => dispatch({ type: 'TOGGLE_OPEN' })} className="toggle-btn">
        {closed ? 'Open Gate' : 'Close Gate'}
      </button>
    </div>
  );
};