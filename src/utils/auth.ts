export function isLoggedIn() {
  expiredToken(localStorage.getItem('token'))
  const accessToken = localStorage.getItem("token");
  if (accessToken) return true;
  return false;
}

function expiredToken(token) {
  if (token !== null) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    if ((Math.floor((new Date).getTime() / 1000)) >= expiry) {
      localStorage.clear();
    }
  }
}
