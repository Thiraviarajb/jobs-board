import React from 'react';
import classes from './JobStatus.module.css';
import { FaBolt, FaArrowCircleRight, FaEject, FaPaperPlane, FaBomb, FaStop, FaThumbsUp } from 'react-icons/fa';

const jobStatus = (props) => {
    let faIcon = null;
    if(props.jobStatus === "Executed") {
        faIcon = <FaBolt className={classes.Fa5x} />;
    }
    else if(props.jobStatus === "Running") {
        faIcon = <FaEject className={classes.Fa5x} />;
    }
    else if(props.jobStatus === "Cancelled") {
        faIcon = <FaPaperPlane className={classes.Fa5x} />;
    }
    else if(props.jobStatus === "Failed") {
        faIcon = <FaBomb className={classes.Fa5x} />;
    }
    else if(props.jobStatus === "Halted") {
        faIcon = <FaStop className={classes.Fa5x} />;
    }
    else if(props.jobStatus === "Succeeded") {
        faIcon = <FaThumbsUp className={classes.Fa5x} />;
    }
    return (
        <div className="col-lg-2">
            <div className={props.myClass}>
                <div className={props.myChildClass}>
                    <div className="row">
                        <div className="col-xs-3">
                            {faIcon}
                        </div>
                        <div className="col-xs-9 text-right">
                            <div className={classes.Huge}>{props.totalJobs}</div>
                            <div>{props.jobStatus}</div>
                        </div>
                    </div>
                </div>
                <a href="/folder/all/project/all/status/all">
                    <div className={classes.PanelFooter}>
                        <span className={classes.PullLeft}>View</span>
                        <span className={classes.PullRight}><FaArrowCircleRight /></span>
                        <div className="clearfix"></div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default jobStatus;