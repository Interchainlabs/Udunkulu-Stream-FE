import './ProgressBar.css';

const ProgressBar =()=>{
    return(
        <div>
            <div className="progress" id="progress">
                <div className="progress-bar"  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"  id="progress-bar"></div>
                <div className="rounded-circle" id="zero"></div>
                <div className="rounded-circle" id="fifty"></div>
                <div className="rounded-circle" id="seventy"></div>
                <div className="rounded-circle" id="hundred"></div>
            </div>
        </div>
    );
}

export {ProgressBar}