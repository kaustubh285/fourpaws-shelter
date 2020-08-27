import React, { Component } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "../css/Search.css";

export default class SearchAppointment extends Component {
  render() {
    return (
      <div className='search-appointments row justify-content-center my-4'>
        <div className='col-md-8 d-flex flex-wrap'>
          <div className='input-group '>
            <TextField
              fullWidth
              id='SearchApts'
              label='Search'
              value={this.props.query}
              onChange={(e) => {
                this.props.onQueryChange(e.target.value);
              }}
              lassName='form-control'
              aria-label='Search Appointments'
              variant='standard'
            />
          </div>
          {/* <input
              id='SearchApts'
              type='text'
              className='form-control'
              aria-label='Search Appointments'
            /> */}
          <div className='w-50 input-group-append'>
            <Button
              color='primary'
              className='dropdown-toggle'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'>
              Sort by: <span className='caret' />
            </Button>

            <div className='sort-menu dropdown-menu dropdown-menu-right'>
              <Button
                color='primary'
                className={
                  "text-left sort-by dropdown-item " +
                  (this.props.orderBy === "petName" ? "active" : "")
                }
                onClick={(e) =>
                  this.props.changeOrder("petName", this.props.orderDir)
                }
                href='#'>
                Pet Name
              </Button>
              <Button
                color='primary'
                className={
                  "text-left sort-by dropdown-item " +
                  (this.props.orderBy === "aptDate" ? "active" : "")
                }
                onClick={(e) =>
                  this.props.changeOrder("aptDate", this.props.orderDir)
                }
                href='#'>
                Date
              </Button>
              <Button
                color='primary'
                className={
                  "text-left sort-by dropdown-item " +
                  (this.props.orderBy === "ownerName" ? "active" : "")
                }
                onClick={(e) =>
                  this.props.changeOrder("ownerName", this.props.orderDir)
                }
                href='#'>
                Owner
              </Button>
              <div role='separator' className='dropdown-divider' />
              <Button
                color='primary'
                className={
                  "text-left sort-by dropdown-item " +
                  (this.props.orderDir === "asc" ? "active" : "")
                }
                onClick={(e) =>
                  this.props.changeOrder(this.props.orderBy, "asc")
                }
                href='#'>
                Asc
              </Button>
              <Button
                color='primary'
                className={
                  "text-left sort-by dropdown-item " +
                  (this.props.orderDir === "desc" ? "active" : "")
                }
                onClick={(e) =>
                  this.props.changeOrder(this.props.orderBy, "desc")
                }
                href='#'>
                Desc
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
