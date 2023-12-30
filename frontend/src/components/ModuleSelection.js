import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/homepage.css';

const modules = [
  { id: 'c1', title: 'MODULE 1', description: 'MODULE 1 description', bgImage: require('../assets/img/bg1.jpg'), defaultChecked: true, link: '/module1' },
  { id: 'c2', title: 'MODULE 2', description: 'MODULE 2 description', bgImage: require('../assets/img/bg1.jpg'), link: '/module2' },
  { id: 'c3', title: 'MODULE 3', description: 'MODULE 3 description', bgImage: require('../assets/img/bg1.jpg'), link: '/module3' },
  { id: 'c4', title: 'MODULE 4', description: 'MODULE 4 description', bgImage: require('../assets/img/bg1.jpg'), link: '/module4' },
];

function ModuleSelection() {
  return (
    <div>
      <h1 className="app-title">Welcome to CyberCity</h1>
      <div className="container">
        {modules.map((module, index) => (
          <React.Fragment key={module.id}>
            <input className="module-input" type="radio" name="slide" id={module.id} defaultChecked={module.defaultChecked}/>
            <label htmlFor={module.id} className="card" style={{ backgroundImage: `url(${module.bgImage})` }}>
              <div className="row">
                <div className="icon">{index + 1}</div>
                <div className="description">
                  <div className="module-title">
                    <h4>{module.title}</h4>
                    <Link to={module.link}>
                      <button>Start</button>
                    </Link>
                  </div>
                  <p>{module.description}</p>
                </div>
              </div>
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default ModuleSelection;