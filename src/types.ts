export interface UserProfileParams {
  login: string,
  following: number,
  followers: number, 
  html_url: string
}

export interface InitialState {
  username: string,
  userProfile: UserProfileParams
}

export type Actions =
  | { type: 'SET_USERNAME'; payload: string }
  | { type: 'SET_USERPROFILE'; payload: UserProfileParams };
