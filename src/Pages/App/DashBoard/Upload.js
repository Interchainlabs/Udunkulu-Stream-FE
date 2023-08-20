import {useState} from 'react';
import './Upload.css';
import './UploadingPage.css';
import {NavLink} from 'react-router-dom';
import {AlbumImage} from '../../../Assets/Images';
import {Button} from '../../../Components';

const Upload =(props)=>{

    const [album, setAlbum] = useState( );

  const handleChange = e => {
      console.log('file has uploaded', e.target.files);
    // if (e.target.files.length) {
    //   setAlbum(e.target.files[0]);
    // }
  };

  const handleUpload = async e => {

  }
  const formInfo = props.formInfo
    return(
        <>
        
        <div className="form spacer" id="formPadding">
            <div className="row p-1 d-flex justify-content-space-evenly">
                <div className="col " id="col1">
                    <div className="form-group form-group-upload" id="albumFormGroup">
                        <label for="albumName" className="label-upload">Album Name</label>
                        <input type="text" className="form-control form-control-upload" id="albumName" aria-describedby="albumName" placeholder="Album Name" onChange={props.handleFieldOnChange} name="title" defaultValue={formInfo.title}/> 
                    </div>

                    <div className="form-group" id="albumFormGroup">
                        <label for="featuring" className="label-upload">Featuring</label>
                        <input type="text" className="form-control form-control-upload" id="featuring" aria-describedby="featuring" placeholder="Featuring" onChange={props.handleFieldOnChange} name="feature" defaultValue={formInfo.feature}/> 
                    </div>

                    <div className="form-group" id="albumFormGroup">
                        <label for="genreSelect" className="label-upload">Genre</label>
                        <select className="form-control form-control-upload" id="genreSelect" onChange={props.handleFieldOnChange} name="genre"  defaultValue={formInfo.genre}>
                        <option>Pop</option>
                        <option>R&B</option>
                        <option>Rap</option>
                        <option>Jazz</option>
                        <option>Blues</option>
                        <option>Metal</option>
                        <option>Country</option>
                        <option>Rock</option>
                        <option>Spiritual</option>
                        </select>
                    </div>

                    <div className="form-group form-control-upload" id="albumFormGroup">
                        <label for="productionYear" className="label-upload">Production Year</label>
                        <input type="date" className="form-control form-control-upload" id="productionYear" aria-describedby="productionYear" placeholder="12 Jan 2021" onChange={props.handleFieldOnChange} name="released" defaultValue={formInfo.released}/> 
                    </div>
                </div>
            
            
            
                <div className="col" id="col2">
                    <div className="card" id="albumCard">
                        <div className="card-body">
                        <label>
                         <input type="file" name="image" id="
                         " style={{display: 'none'}} onChange={props.handleAlbumCoverSelect}  accept="image/*"/>
                          <img id="albumImage" src={AlbumImage} alt="" />
                     </label>
                            <p>Click to add album art</p>
                        </div>
                    </div>

                    <div className="form-group" id="moodFormGroup">
                        <label for="moodSelect" className="label-upload">Mood</label>
                        <select className="form-control form-control-upload" id="moodSelect" onChange={props.handleFieldOnChange} name="mood" defaultValue={formInfo.mood} >
                        <option>Workout</option>
                        <option>FeelGood</option>
                        <option>Romance</option>
                        <option>Focus</option>
                        <option>Party</option>
                        </select>
                    </div>
                </div> 
            </div>''''''''''''
            
            <div className="DropBox" id="dropBox">
                
                <p>Click to add files from your device</p>
                <input
                    type="file"
                    multiple
                    id="upload-button"
                    hidden
                    onChange={props.handleSongUpload}
                    accept="audio/*"
                />
               <label htmlFor="upload-button" id="browse-file" onChange={props.handleSongUpload} className="label-upload">
                   Browse file
               </label>
               
                
            </div>
        </div>
    

        <div id="buttonDiv">
            <NavLink to="/dashboard" className="nav-link">
                <Button variant="back" size={"sm"}>Back</Button>
            </NavLink>
           
            <NavLink to="/upload" className="nav-link">
                <Button variant="next" size={"sm"}>Next</Button>
            </NavLink>
        </div>
        </>
    );
}

export {Upload};