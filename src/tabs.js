import { React, useState, useEffect } from 'react';
import Nav from './nav';
import './tabs.css';
import { Form, useNavigate } from 'react-router-dom';

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
    navigate('/gen')
}
  return (
    <div className="tab-page">
      <Nav/>
      <br/>
      <br/>
      <div className="tab-container">
        <div className="tabs">
          <button
            className={activeTab === 'Tab1' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('Tab1')}
          >
            TAB 1
          </button>
          <button
            className={activeTab === 'Tab2' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('Tab2')}
          >
            TAB 2
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'Tab1' && <div className="content">TAB 1</div>}
          {activeTab === 'Tab2' && <div className="content">TAB 2</div>}
        </div>
      </div>
      <footer>Empowered by ZeroX © All Rights Reserved.</footer>
    </div>
  );
}

export default Tab;
