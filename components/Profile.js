import React, { Component } from 'react'

export class Profile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       profileImg:"https://bodhicounseling.com/wp-content/uploads/2018/05/blank-profile-picture-973460_960_720-300x300.png",
       username:'' ,
    }
  }
  handleSubmit=(event)=>{
    
   alert(`$profilename:{this.state.username}`)
  }
  handleChangeProfileName=(event)=>{
    this.setState({
      username:event.target.value
      
    })
  }
  imageHandler = (e) =>{
    const reader=new FileReader();
    reader.onload=()=>{
      if(reader.readyState ===2){
        this.setState({profileImg:reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  render() {
    const {profileImg}=this.state
    const {username}=this.state
    return (
      <div>
        <div>
          <h1>add your image</h1>
          <div>
            <img src={profileImg} alt=" " />
          </div>
          <input type="file" name="image-upload" accept='image/*' onChange={this.imageHandler}/>
          <div>
            <label htmlFor='input'>
              <i>add_photo_alternate</i>
              choose your photo</label>
          </div>
          <div>
            <label>
              username:
            </label>
            <input type="text" value={username} onChange={this.handleChangeProfileName}/>
            <button type="submit" value={username} onClick={this.handleSubmit}>submit</button>
            <div>
              profilename:{this.username}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Profile