import React from 'react';
// import "../App.css"
import "../LoadingComponent/LoadingSpinner.css"
function LoadingSpinner() {
  return <>
   {/* <div className="custom-display" >
  <div className="spinner-border spinner-border-custom"  role="status">
  </div>
    <span className='custom-loading-text '>Loading...</span>
</div> */}
<div className="pageloader gray-bg">
    <div className="loader">
      <div className="sp-hydrogen"></div>
      <span>Loading...</span>
    </div>
  </div>
  
  {/* <div className="container bootstrap snippets bootdeys">
    <div className="jumbotron">
        <h1 id="loading-text">Loading...</h1>
	</div>
</div> */}
  </>;
}

export default LoadingSpinner;