import React, { useEffect, useState } from "react";
import "../css/profile.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const initialProfile = {
    name: "John Doe",
    gender: "male",
    homeTown: "Kirkland",
    website: "https://www.linkedin.com/",
    Role: "Product Manager",
    Current_Title: "Product Manager",
    Previous_Title: "Technical Lead",
    Years_of_Experience: "7",
    Current_Company: "Microsoft",
    bio: "A passionate software developer with a love for new technologies.",
    location: "Vancouver, Canada",
    profilePic: "https://via.placeholder.com/150",
  };

  const [editMode, setEditMode] = useState(false);
  const [userProfile, setUserProfile] = useState(initialProfile);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  const handleSave = () => {
    setEditMode(false);
  };

  useEffect(() => {
    console.log(user);
    if (!user.isLoggedIn) navigate("/login");
  }, [user, user.isLoggedIn, navigate]);

  return (
    <div className="profile-container">
      {editMode ? (
        <div>
          <h2>Edit Profile</h2>
          <form className="profile-edit-form">
            {/* Name */}
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={userProfile.name}
                onChange={handleInputChange}
              />
            </label>

            {/* Gender */}
            <label>
              Gender:
              <select
                name="gender"
                value={userProfile.gender}
                onChange={handleInputChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>

            {/* Hometown */}
            <label>
              Home Town:
              <input
                type="text"
                name="homeTown"
                value={userProfile.homeTown}
                onChange={handleInputChange}
              />
            </label>

            {/* Website */}
            <label>
              Website:
              <input
                type="text"
                name="website"
                value={userProfile.website}
                onChange={handleInputChange}
              />
            </label>

            {/* Role */}
            <label>
              Role:
              <select
                name="Role"
                value={userProfile.Role}
                onChange={handleInputChange}
              >
                <option value="Design">Design</option>
                <option value="PM">PM</option>
                <option value="Dev">Dev</option>
                <option value="Marketing">Marketing</option>
                <option value="Strategy">Strategy</option>
              </select>
            </label>

            {/* Current Title */}
            <label>
              Current Title:
              <input
                type="text"
                name="Current_Title"
                value={userProfile.Current_Title}
                onChange={handleInputChange}
              />
            </label>

            {/* Previous Title */}
            <label>
              Previous Title:
              <input
                type="text"
                name="Previous_Title"
                value={userProfile.Previous_Title}
                onChange={handleInputChange}
              />
            </label>

            {/* Years of Experience */}
            <label>
              Years of Experience:
              <input
                type="number"
                name="Years_of_Experience"
                value={userProfile.Years_of_Experience}
                onChange={handleInputChange}
              />
            </label>

            {/* Bio */}
            <label>
              Bio:
              <textarea
                name="bio"
                value={userProfile.bio}
                onChange={handleInputChange}
              />
            </label>

            {/* Location */}
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={userProfile.location}
                onChange={handleInputChange}
              />
            </label>

            <button type="button" onClick={handleSave}>
              Save
            </button>
          </form>
        </div>
      ) : (
        <div>
          <div className="profile-header">
            <img
              src={userProfile.profilePic}
              alt="Profile"
              className="profile-pic"
            />
            <h1 className="profile-name">{user.name}</h1>
            <p className="profile-profession">{userProfile.Current_Title}</p>
          </div>

          <div className="profile-details">
            <h2>Bio</h2>
            <p>{userProfile.bio}</p>

            <h2>Location</h2>
            <p>{userProfile.location}</p>

            <h2>Home Town</h2>
            <p>{userProfile.homeTown}</p>

            <h2>Website</h2>
            <a
              href={userProfile.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {userProfile.website}
            </a>

            <h2>Role</h2>
            <p>{userProfile.Role}</p>

            <h2>Current Title</h2>
            <p>{userProfile.Current_Title}</p>

            <h2>Previous Title</h2>
            <p>{userProfile.Previous_Title}</p>

            <h2>Years of Experience</h2>
            <p>{userProfile.Years_of_Experience} years</p>
          </div>

          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
