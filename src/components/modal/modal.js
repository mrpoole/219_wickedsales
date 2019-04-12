import React, { Component } from 'react';
import './modal.scss';

class Modal extends Component {
    render(){
        if(this.props.isOpen){
            return(
                <div className="ws-modal">
                    <div className="ws-modal-content">
                        {this.props.children}

                        <div className="ws-modal-actions center">
                            <button onClick={this.props.close} className="btn btn-large blue darken-2">Okay</button>
                        </div>
                    </div>
                </div>
            );
        }

        return null;
    };
}

export default Modal;