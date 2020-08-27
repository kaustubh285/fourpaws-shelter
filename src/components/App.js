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
      formDisplay: false,
      myAppointments: [],
      orderBy: "aptDate",
      orderDir: "asc",
      query: "",
    };

    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.onQueryChange = this.onQueryChange.bind(this);
  }

  onQueryChange(queryText) {
    this.setState({
      query: queryText,
    });
  }
  changeOrder(order, dir) {
    this.setState({
      orderBy: order,
      orderDir: dir,
    });
  }

  addAppointment(newAptmt) {
    let newAppointmentList = this.state.myAppointments;
    newAppointmentList.unshift(newAptmt);
    this.setState({ myAppointments: newAppointmentList });
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
    let order;
    let filteredAptmts = this.state.myAppointments;

    if (this.state.orderDir === "asc") {
      order = 1;
    } else {
      order = -1;
    }

    filteredAptmts = filteredAptmts
      .sort((a, b) => {
        if (
          a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy].toLowerCase()
        ) {
          return -1 * order;
        } else {
          return 1 * order;
        }
      })
      .filter((eachItem) => {
        return (
          eachItem["petName"]
            .toLowerCase()
            .includes(this.state.query.toLowerCase()) ||
          eachItem["ownerName"]
            .toLowerCase()
            .includes(this.state.query.toLowerCase())
          // ||
          // eachItem["aptNotes"]
          //   .toLowerCase()
          //   .includes(this.state.query.toLowerCase())
        );
      });

    return (
      <main className='page bg-white' id='petratings'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 bg-white'>
              <div className='container'>
                <AddAppointment
                  toggleForm={this.toggleForm}
                  formDisplay={this.state.formDisplay}
                  addAppointment={this.addAppointment}
                />
                <SearchAppointment
                  orderBy={this.state.orderBy}
                  orderDir={this.state.orderDir}
                  changeOrder={this.changeOrder}
                  query={this.state.query}
                  onQueryChange={this.onQueryChange}
                />
                <ListAppointment
                  appointments={filteredAptmts}
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
