import React, { Component } from "react";
import { IconButton } from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import Moment from "react-moment";

export default class ListAppointment extends Component {
  render() {
    return (
      <div className='appointment-list item-list mb-3'>
        {this.props.appointments.map((aptmt, key) => (
          <div className='pet-item col media py-3' key={key}>
            <div className='mr-3 pt-0'>
              <IconButton onClick={() => this.props.deleteAppointment(aptmt)}>
                <CloseIcon fontSize='large' color='secondary' />
              </IconButton>
              {/* <button className='pet-delete btn btn-sm btn-danger'>X</button> */}
            </div>

            <div className='pet-info media-body'>
              <div className='pet-head d-flex'>
                <span className='pet-name'>{aptmt.petName}</span>
                <span className='apt-date ml-auto'>
                  <Moment
                    date={aptmt.aptDate}
                    parse='YYYY-MM-dd hh:mm'
                    format='D-MMM | h:mma'
                  />
                </span>
              </div>

              <div className='owner-name'>
                <span className='label-item'>Owner: </span>
                <span>{aptmt.ownerName}</span>
              </div>
              <div className='apt-notes'>{aptmt.aptNotes}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
