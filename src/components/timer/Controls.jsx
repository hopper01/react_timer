import React from 'react';
import PropTypes from 'prop-types';
import './styles/controls.css'


const Controls = (props) => (
                <div className="controls">
                    {
                        props.status !== 'started' &&
                        <button className="btn btn-lg btn-success start"
                            disabled={!props.canStart}
                            onClick={props.startTimer}
                            style ={{'marginTop': '1.8rem'}}
                            >
                            <div className="start">
                                <i class="fas fa-play"></i>
                            </div>
                        </button>
                    }

                    {
                        props.status === 'started' &&
                        <button className="btn btn-lg btn-dark stop"
                            onClick={props.stopTimer}
                            style = {{'marginTop': '19.8rem'}}
                            >
                            <div className="stop">
                                <i class="fas fa-stop"></i>
                            </div>
                        </button>
                    }
                    <button className="btn btn-lg btn-primary"
                        onClick={props.resetTimer}
                        style = {props.status === 'started'? {'marginTop': '19.8rem'}:{'marginTop': '1.8rem'}}
                        >
                        <div className="refresh">
                          <i class="fas fa-sync"></i>
                        </div>
                    </button>
                </div>
);

Controls.defaultProps = {
    startTimer: () => alert('startTimer'),
    stopTimer: () => alert('stopTimer'),
    resetTimer: () => alert('resetTimer'),
    status: null,
    canStart: false,
};

Controls.propTypes = {
    startTimer: PropTypes.func,
    stopTimer: PropTypes.func,
    resetTimer: PropTypes.func,
    status: PropTypes.string,
    canStart: PropTypes.bool
};

export default Controls;