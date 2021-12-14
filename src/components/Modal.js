import React, { Component } from "react";
export default class Modal extends Component {
  render() {
    return (
      <div className="modal-bg">
        <div className="modal">
          <h1 className="modal-title">{this.props.title}</h1>
          <img className="modal-img" src={this.props.image} alt="" />
          <p className="modal-p">{this.props.content}</p>
          <button
            type="button"
            className="modal-close"
            onClick={this.props.hide}
          >
            close
          </button>
        </div>
      </div>
    );
  }
}
