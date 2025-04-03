// components/CustomNode.jsx
import React from 'react';
import { Handle } from 'reactflow';
import { NavLink } from 'react-router-dom';

const CustomNode = ({ data }) => {
  return (
    <div className="bg-white px-4 py-2 rounded shadow text-center border border-yellow-300 text-sm">
      <NavLink to={data.path} className="text-blue-600 hover:underline">
        {data.label}
      </NavLink>
      <Handle type="target" position="top" style={{ background: '#FACC15' }} />
      <Handle type="source" position="bottom" style={{ background: '#FACC15' }} />
    </div>
  );
};

export default CustomNode;
