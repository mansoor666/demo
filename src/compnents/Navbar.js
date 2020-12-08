import React from 'react'
import ALLTASKS from './ALL TASKS';

import UNASSIGNEDTASKS from './UNASSIGNED TASKS';

const Navbar = () => {
    return (
        <>
<ul className="nav nav-tabs">
  <li className="active"><a data-toggle="tab" href="#home">UNASSIGNED TASKS</a></li>
  <li><a data-toggle="tab" href="#menu1">ASSIGNED TASKS</a></li>
  <li><a data-toggle="tab" href="#menu2">ALL TASKS</a></li>
  <li><button data-toggle="tab" href="#menu3" className="Alltask" >ALL TASKS</button></li>
</ul>

<div className="tab-content">
  <div id="home" className="tab-pane fade in active">
    <UNASSIGNEDTASKS />

  </div>
  <div id="menu1" className="tab-pane fade">
    <h3>Menu 1</h3>
    <p>Some content in menu 1.</p>
  </div>
  <div id="menu2" className="tab-pane fade">
    <h3>Menu 2</h3>
    <p>Some content in menu 2.</p>
  </div>
</div>
</>
    );
}

export default Navbar
