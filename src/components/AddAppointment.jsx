import React, { Component } from "react";
import { Button } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

export default class AddAppointment extends Component {
  render() {
    return (
      <div
        className={
          "card textcenter mt-3 " +
          (this.props.formDisplay ? "" : "add-appointment")
        }>
        <Typography component='div' variant='body1' className='apt-addheading'>
          <Box bgcolor='primary.main' color='primary.contrastText' p={2}>
            Add Appointment
          </Box>
        </Typography>

        <div className='card-body'>
          <form id='aptForm' noValidate>
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
                />
              </div>
            </div>

            <div className='form-group form-row mb-0'>
              <div className='offset-md-2 col-md-10'>
                <Button
                  color='primary'
                  variant='outlined'
                  type='submit'
                  onClick={(e) => {
                    e.preventDefault();
                  }}
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
