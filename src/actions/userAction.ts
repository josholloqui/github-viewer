import { UserProfileParams } from '../types';

export const SET_USERNAME = 'SET_USERNAME'
export const setUsername = (username: string) => ({
  type: SET_USERNAME,
  payload: username
});

export const SET_USERPROFILE = 'SET_USERPROFILE';
export const setUserProfile = (userProfile: UserProfileParams) => ({
  type: SET_USERPROFILE,
  payload: userProfile
});
