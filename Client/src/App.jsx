import React, { useState, useContext } from 'react';
import { Button } from "antd"; //add an import call on your components pulled from antd (in your component.jsx)
//adding a button to test, delete in future version
import LeadCapture from './components/leadCapture';
import { ApiKeyProvider } from './context/apiKeyContext';
import './App.css'

function App() {


  return (
<ApiKeyProvider>
      <Button type="primary">This uses antd</Button>
      {/* example of how to use lead capture button or form on a page. this will be removed. import LeadCapture is needed on page */}
      <div style={{ padding: '20px' }}>
      {/* LeadCapture component used as a modal example */} 
      <LeadCapture
        isModal={true}
      />

      {/* LeadCapture component used directly on the page example */}
      <LeadCapture
        isModal={false}
      />
    </div>
    </ApiKeyProvider>

  );
}

export default App;
