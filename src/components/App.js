import React from "react";

import "../css/App.css";
import AddAppointment from "./AddAppointment";
import ListAppointment from "./ListAppointment";
import SearchAppointment from "./SearchAppointment";
import { without } from "lodash";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      formDisplay: true,
      myAppointments: [],
    };

    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }
  toggleForm() {
    const newFormDisplay = !this.state.formDisplay;
    this.setState({
      formDisplay: newFormDisplay,
    });
  }
  deleteAppointment(dAppointment) {
    let newAppointmentList = this.state.myAppointments;
    newAppointmentList = without(newAppointmentList, dAppointment);

    this.setState({
      myAppointments: newAppointmentList,
    });
  }

  componentDidMount() {
    fetch("./data.json")
      .then((response) => response.json())
      .then((result) => {
        const appointments = result.map((item) => {
          return item;
        });
        this.setState({
          myAppointments: appointments,
        });
      });
  }

  render() {
    return (
      <main className='page bg-white' id='petratings'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 bg-white'>
              <div className='container'>
                <AddAppointment
                  toggleForm={this.toggleForm}
                  formDisplay={this.state.formDisplay}
                />
                <SearchAppointment />
                <ListAppointment
                  appointments={this.state.myAppointments}
                  deleteAppointment={this.deleteAppointment}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
