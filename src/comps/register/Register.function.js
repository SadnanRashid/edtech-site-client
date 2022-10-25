import { updateProfile } from "firebase/auth";

const updateUserProfile = (auth, profileData) => {
  updateProfile(auth.currentUser, profileData)
    .then(() => {})
    .catch((error) => console.error(error));
};

export { updateUserProfile };
