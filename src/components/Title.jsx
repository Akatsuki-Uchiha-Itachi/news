import React from 'react';

const Title = ({ title, onFilterClick }) => {
 
  return (
    <div className="container flex justify-start">
      <h1 className="text-3xl  font-bold text-center my-4">
      {title}
     
    </h1>
<svg onClick={onFilterClick} className='mt-4 ml-3 hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
</svg>
    </div>

  );
};

export default Title;
