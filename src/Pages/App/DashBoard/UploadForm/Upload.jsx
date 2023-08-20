import React, { useState } from "react";
import { Finish } from '../Finish'
import { Preview } from '../Preview'
import { Upload } from '../Upload'
import { UploadingPage } from '../UploadingPage'
import Stepper from "react-stepper-horizontal";
import axios from "axios";

export function UploadForm() {
  const [formInfo, setformInfo] = useState({
    albumCover: null,
    title: '',
    description: '',
    song: null,
    mood: 'workout',
    genre: 'pop',
    released: '',
    feature: '',
    uploadStatus: ''
  })
  // const [value] = React.useContext(FormContext);
  const [currentPage, setCurrentPage] = useState(0);
  const sections = [
    { title: 'Add Song', onClick: () => setCurrentPage(1) },
    { title: 'Preview', onClick: () => setCurrentPage(2) },
    { title: 'Progress', onClick: () => setCurrentPage(3) },
    { title: 'Finish' }
  ];
  const handleSubmit = async (e) => {
    // this code sends 
    e.preventDefault();
    const form = new FormData()
    form.append('title',formInfo.title);
    form.append('released',formInfo.released);
    form.append('albumCoverArt',formInfo.albumCover);
    var token = localStorage.getItem('token');
    var artistId = localStorage.getItem('artistId')
    const config = {
      headers: { 
          token: token,
          headers: {
        'Content-Type': 'multipart/form-data',
        onUploadProgress: function(progressEvent) {
          var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
          console.log(percentCompleted)
        }
      }
      }
  };
    // create an album
    axios.post(`https://udunkulu-api.herokuapp.com/api/v1/artists/${artistId}/albums`,form,config)
    .then((response) => {
        next()
      console.log(response);
      var albumId, musicFormData;
     // saved album id for music uploading function
      albumId = response.data.data._id
            // upload the  music
            musicFormData = new FormData();
            musicFormData.append('mood', formInfo.mood)
            musicFormData.append('genre', formInfo.genre)
            musicFormData.append('_song', formInfo.song)
            axios.post(`https://udunkulu-api.herokuapp.com/api/v1/artists/${artistId}/albums/${albumId}/songs`,musicFormData,config).then((response) => {
                console.log(response)
                var progess = document.getElementById('progress');
                progess.innerHTML = response.data;
                next()
            },(error) => {
              console.log(error);
            });
    }, (error) => {
      console.log(error);
    });
  };

  const next = () =>setCurrentPage((prev) => prev + 1);
  const prev = () => setCurrentPage((prev) => prev - 1);

  const handleAlbumCoverSelect = (e) =>{
    var file = e.target.files[0];
    // setformInfo(formInfo.song = file);
    setformInfo({
      ...formInfo,
      albumCover: file
    });
    e.target.parentElement.nextElementSibling.textContent = file.name;
  }
  const handleSongUpload = (e) =>{
    var file = e.target.files[0];
    // setformInfo(formInfo.song = file);
    setformInfo({
      ...formInfo,
      song: file
    });
    next()
  }
  const handleFieldOnChange = (e) =>{
    const value = e.target.value;
    setformInfo({
      ...formInfo,
      [e.target.name]: value
    });
  }
  return (
    <div className="top-align">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
      <Stepper
        steps={sections}
        activeStep={currentPage}
        activeColor="#FFA700"
        defaultBarColor="#434343" 
        completeColor="#FFA700"
        completeBarColor="#FFA700"
        completeTitleColor="#FFA700"
        activeTitleColor="#FFA700"
        defaultBorderWidth= {	500}
        lineMarginOffset = {0}
        defaultTitleColor = '#434343'
        defaultColor = '#434343'
        circleFontColor = '#a7a7a700'
        disabledSteps={ [4] }
        size= {25}
       />

        {currentPage === 0 && (
          <>
            <Upload handleAlbumCoverSelect={handleAlbumCoverSelect} handleSongUpload={handleSongUpload} handleFieldOnChange={handleFieldOnChange} formInfo={formInfo} />
          </>
        )}
        {currentPage === 1 && (
          <>
          <Preview  next={next} prev={prev} formInfo={formInfo}  />
          </>
        )}
        {currentPage === 2 && (
          <>
          {console.log(formInfo)}
          <UploadingPage  next={next} prev={prev} formInfo={formInfo}   />
          
          </>
        )}
        {currentPage === 3 && (
          <>
            <Finish />
          </>
        )}
      </form>
    </div>
  );
}
