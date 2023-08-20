import './Finish.css';
import {UploadSuccess} from '../../../Assets/Images';
const Finish =()=>{
    return(
        <>
            <div className="card upload-success spacer">
                <div className="card-body">
                <img src={UploadSuccess} alt="" id="uploadImage"/>
                </div>
              
            </div>
        </>
    );
}

export {Finish};