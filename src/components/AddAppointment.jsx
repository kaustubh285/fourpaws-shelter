import React, { Component } from "react";
import { Button } from "@material-ui/core";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default class AddAppointment extends Component {
  constructor() {
    super();
    this.state = {
      petName: "",
      ownerName: "",
      aptDate: "",
      aptTime: "",
      aptNotes: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
  }

  handleAddSubmit(e) {
    e.preventDefault();
    let newAptmt = {
      petName: this.state.petName,
      ownerName: this.state.ownerName,
      aptDate: this.state.aptDate + " " + this.state.aptTime,
      aptNotes: this.state.aptNotes,
    };

    this.props.addAppointment(newAptmt);

    this.setState({
      petName: "",
      ownerName: "",
      aptDate: "",
      aptTime: "",
      aptNotes: "",
    });

    this.props.toggleForm();
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const nname = target.name;
    this.setState({
      [nname]: value,
    });
  }

  render() {
    const useStyles = makeStyles((theme) => ({
      button: {
        margin: theme.spacing(1),
      },
    }));
    return (
      <div
        className={
          "card textcenter mt-3 " +
          (this.props.formDisplay ? "" : "add-appointment")
        }>
        <Typography component='div' variant='body1' className='apt-addheading'>
          <Box bgcolor='primary.main' color='primary.contrastText' p={2}>
            <Button
              variant='contained'
              color='default'
              className={useStyles.button}
              startIcon={<AddCircleTwoToneIcon />}
              onClick={this.props.toggleForm}>
              Add Appointment{" "}
            </Button>
          </Box>
        </Typography>

        <div className='card-body'>
          <form id='aptForm' noValidate onSubmit={this.handleAddSubmit}>
            <div className='form-group form-row'>
              <label
                className='col-md-2 col-form-label text-md-right'
                htmlFor='petName'
                readOnly>
                Pet Name
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  name='petName'
                  placeholder="Pet's Name"
                  value={this.state.petName}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className='form-group form-row'>
              <label
                className='col-md-2 col-form-label text-md-right'
                htmlFor='ownerName'>
                Pet Owner
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  name='ownerName'
                  placeholder="Owner's Name"
                  value={this.state.ownerName}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className='form-group form-row'>
              <label
                className='col-md-2 col-form-label text-md-right'
                htmlFor='aptDate'>
                Date
              </label>
              <div className='col-md-4'>
                <input
                  type='date'
                  className='form-control'
                  name='aptDate'
                  id='aptDate'
                  value={this.state.aptdate}
                  onChange={this.handleChange}
                />
              </div>
              <label
                className='col-md-2 col-form-label text-md-right'
                htmlFor='aptTime'>
                Time
              </label>
              <div className='col-md-4'>
                <input
                  type='time'
                  className='form-control'
                  name='aptTime'
                  id='aptTime'
                  value={this.state.aptTime}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className='form-group form-row'>
              <label className='col-md-2 text-md-right' htmlFor='aptNotes'>
                Apt. Notes
              </label>
              <div className='col-md-10'>
                <textarea
                  className='form-control'
                  rows='4'
                  cols='50'
                  name='aptNotes'
                  id='aptNotes'
                  placeholder='Appointment Notes'
                  value={this.state.aptnotes}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className='form-group form-row mb-0'>
              <div className='offset-md-2 col-md-10'>
                <Button
                  color='primary'
                  variant='outlined'
                  type='submit'
                  className='d-block ml-auto'>
                  Add Appointment
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
