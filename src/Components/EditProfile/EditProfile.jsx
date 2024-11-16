import React, { useState } from 'react';
import './EditProfile.css'; 
import profile from "./assets/profile.jpg"

const EditProfile = () => {
  const [formData, setFormData] = useState({
    profilePicture: '',
    firstName: '',
    lastName: '',
    username: '',
    oldPassword: '',
    newPassword: '',
    email: '',
    bio: '',
    birthDate: '',
    city: '',
    phone: '',
  });

  // برای قسمت ادیت پروفایل لازم است در هنگام لود صفحه در هوک یوز افکت اطلاعات کاربر گرفته شود و در فرم ست شود تا اطلاعات کاربر در فیلد ها نمایش داده یشود.و همینطور پسوورد قبلی با پسوورد فعلی چک شود.
  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.oldPassword===formData.newPassword)
      alert("new pass = old pass!")
    console.log(formData);
  };

  return (
    <div className="edit-profile-container">
      <nav className="navbar">
        <button className="nav-button" onClick={() => window.history.back()}>Back</button>
      </nav>
   
      <form className="profile-form" onSubmit={handleSubmit}>
      <h1 className="title">Edit Profile</h1>
      <hr />
        <div className='profile'>
        <label className="form-label ">
          <img src={profile} alt="profile" />
          <input type="file" accept="image/*" className="file-input" onChange={(e) => setFormData({ ...formData, profilePicture: e.target.files[0] })} />
          <span className="change-button">Change</span>
        </label>
        </div>
        <div className="nameSection">
        <label className="form-label">
          First Name:
          <input type="text" name="firstName" className="form-input" value={formData.firstName} onChange={handleChange} />
        </label>
        <label className="form-label">
          Last Name:
          <input type="text" name="lastName" className="form-input" value={formData.lastName} onChange={handleChange} />
        </label>
        </div>
        <label className="form-label">
          Username:
          <input type="text" name="username" className="form-input" value={formData.username} onChange={handleChange} />
        </label>
        <label className="form-label">
          Old Password:
          <input type="password" name="oldPassword" className="form-input" value={formData.oldPassword} onChange={handleChange} />
        </label>
        <label className="form-label">
          New Password:
          <input type="password" name="newPassword" className="form-input" value={formData.newPassword} onChange={handleChange} />
        </label>
        <label className="form-label">
          Email:
          <input type="email" name="email" className="form-input" value={formData.email} onChange={handleChange} />
        </label>
        <label className="form-label">
          Bio:
          <textarea name="bio" className="form-textarea" value={formData.bio} onChange={handleChange} />
        </label>
        <label className="form-label">
          Birth Date:
          <input type="date" name="birthDate" className="form-input" value={formData.birthDate} onChange={handleChange} />
        </label>
        <label className="form-label">
          City:
          <input type="text" name="city" className="form-input" value={formData.city} onChange={handleChange} />
        </label>
        <label className="form-label">
          Phone:
          <input type="tel" name="phone" className="form-input" value={formData.phone} onChange={handleChange} />
        </label>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default EditProfile;