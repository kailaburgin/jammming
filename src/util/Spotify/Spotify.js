let accessToken;
const clientID = "ff0dd475ec1d4efc82da9cec13cc1f42";
const redirectURI = "http://localhost:3000/";

const Spotify = {
  getAccessToken() {
    //First check for access token
    if (accessToken) return accessToken;
    const tokenInURL = window.location.href.match(/access_token=([^&]*)/); // extract access token from URL
    const expiryTime = window.location.href.match(/expires_in=([^&]*)/); // extract expiry time from URL

    //Second check for access token if first one is false
    if (tokenInURL && expiryTime) {
      //setting access token and expiry time variables
      accessToken = tokenInURL[1];
      const expiresIn = Number(expiryTime[1]);

      //setting the function that will reset the access token when it expires
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      //clearing the url after the token expires
      window.history.pushState("Access token", null, "/");
      return accessToken;
    }

    //Third check for access token if first two are false
    const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}
    `;
    window.location = redirect;
  },
};

export { Spotify };
