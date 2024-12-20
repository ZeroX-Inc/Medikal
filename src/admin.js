import { React, useEffect } from 'react';
import Nav from './nav';
import Tab from './tabs';

function Admin() {
  return (
    <div className="admin-page">
        <body>
            <Tab/>
      </body>
      {/* <footer> <span style={{color: "black"}}>Empowered by ZeroX © All Rights Reserved 2025.</span></footer> */}
    </div>
  );
}

export default Admin;
