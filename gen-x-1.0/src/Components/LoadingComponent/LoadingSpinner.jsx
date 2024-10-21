import React from 'react';
// import "../App.css"
import "../LoadingComponent/LoadingSpinner.css"
function LoadingSpinner() {
  return <>
   <div className="custom-display" >
  <div className="spinner-border spinner-border-custom"  role="status">
  </div>
    <span className='custom-loading-text '>Loading...</span>
</div>
  </>;
}

export default LoadingSpinner;