import React, { Component } from 'react';
import './modal.scss';

class Modal extends Component {
    render() {
        const { children,
            defaultAction,
            defaultActionText = 'Okay',
            isOpen,
            secondaryAction = null,
            secondaryActionText = 'Cancel'
        } = this.props;

        if (this.props.isOpen) {
            return (
                <div className="ws-modal">
                    <div className="ws-modal-content">
                        {this.props.children}

                        <div className="ws-modal-actions center">
                            <button onClick={defaultAction} className="btn btn-large blue darken-2">{defaultActionText}</button>

                            {
                                secondaryAction
                                    ? <button onClick={secondaryAction} className="btn btn-large red darken-2">{secondaryActionText}</button>
                                    : null
                            }
                        </div>
                    </div>
                </div>
            );
        }

        return null;
    };
}

export default Modal;