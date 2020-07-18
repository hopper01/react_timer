import React from 'react';
import PropTypes from 'prop-types';
import Time from '../time/Time';
import './styles/display.css';


const Display = (props) => {
    const time = new Time();
    const onChange = (e) => {
        props.onSecondsChanged(e.target.value);
    };
    const deleteTimer = () => {
    props.handleDeleteTimer(props.id);
   }
   return (
       <div className="timer">
       <button
       className = 'del-btn'
       onClick = {deleteTimer}
       ><i class="fas fa-trash"></i></button>
        <div className="clock">
            { 
                    props.status === 'started' &&
                    <div className="display-time">
                        <h1>{props.timerName}</h1>
                        <h2 className="ends">Ends in</h2>
                        <div className='run-time'
                        style = {{color: props.time <= 10000 ? '#FE5C5C' : ''}}
                        >{time.getTime(props.time)}</div>
                    </div> 
            }
            {
                    props.status !== 'started' && 
                    <div>
                    <div className='timer-name'>{props.timerName}</div>
                    <div className="initial-input">
                        <div className="display-in-time">
                        {time.getTime(props.time)}
                        </div>         
                        <div className="input-time">
                        <input 
                            className = ''
                            maxLength = '6'
                            value = {props.seconds}
                            onChange = {onChange}
                        />
                        </div>
                    </div>
                </div>
                }
                <div>
                    {props.children}
                </div>
            </div>
        </div>
        );
    }
Display.defaultProps = {
    seconds: 0,
    status: null,
    time: 0,
    onSecondsChanged: (e) => console.log(e.target.value)
};

Display.propTypes = {
    children: PropTypes.element,
    seconds: PropTypes.number.isRequired,
    status: PropTypes.string,
    time: PropTypes.number,
    onSecondsChanged: PropTypes.func
};
export default Display
