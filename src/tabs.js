import { React, useState, useEffect } from 'react';
import Nav from './nav';
import './tabs.css';
import { useNavigate } from 'react-router-dom';
import Patient from './Patient.js';

function Tab() {
  const [activeTab, setActiveTab] = useState('Tab1');
  const navigate = useNavigate();

  useEffect(() => {
    switch (activeTab) {
      case 'Tab1':
        document.title = 'MEDIKU';
        break;
      case 'Tab2':
        document.title = 'TAB 2';
        break;
      default:
        document.title = 'Admin';
    }
  }, [activeTab]);

  const enter = () => {
    navigate('/patient')
}
  return (
    <div className="tab-page">
      <Nav/>
      <br/>
      <button  style={{display: 'none'}} onClick={enter}>Enter</button>
      <br/>
      <div className="tab-container">
        <div className="tabs">
          <button
            className={activeTab === 'Tab1' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('Tab1')}
          >
            Patient
          </button>
          <button
            className={activeTab === 'Tab2' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('Tab2')}
          >
            TAB 2
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'Tab1' && <div className="content"><Patient/></div>}
          {activeTab === 'Tab2' && <div className="content">TAB 2</div>}
        </div>
      </div>
      <footer>Empowered by ZeroX © All Rights Reserved.</footer>
    </div>
  );
}

export default Tab;
