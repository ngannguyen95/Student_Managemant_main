import logo from './logo.svg';
import './App.css';
import Control from './components/Control';
import ListStudents from './components/ListStudents';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <Control />
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <ListStudents />
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        <Form />
        {/* END FORM SINH VIÊN */}
      </div>

    </div>
  );
}

export default App;
