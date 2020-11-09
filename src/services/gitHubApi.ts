import { UserProfileParams } from '../types';

export const userProfile = (username: string) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(json => json.map((user: UserProfileParams) => ({
      username: user.login,
      following: user.following,
      followers: user.followers,
      profileUrl: user.html_url
    })));
};

