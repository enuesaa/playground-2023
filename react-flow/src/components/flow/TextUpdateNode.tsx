import { ChangeEventHandler, useCallback } from 'react'
import { Handle, Position } from 'reactflow'

const handleStyle = { left: 10 }

export const TextUpdateNode = ({ data }) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle type='target' position={Position.Top} />
      <div>
        <label htmlFor='text'>Text:</label>
        <input id='text' name='text' onChange={onChange} className='nodrag' />
      </div>
      <Handle type='source' position={Position.Bottom} id='a' />
      {/* <Handle type='source' position={Position.Bottom} id='b' style={handleStyle} /> */}
    </>
  );
}