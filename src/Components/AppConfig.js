let backendHost;

const hostname = window && window.location && window.location.hostname;

// if (hostname === "localhost") {
//   backendHost = "http://andnproject-env.eba-vrmatduy.ap-northeast-2.elasticbeanstalk.com";
// } else {
//   backendHost = "http://andnproject-env.eba-vrmatduy.ap-northeast-2.elasticbeanstalk.com";
// }

if (hostname === "localhost") {
  backendHost = "http://localhost:8080";
} else {
  backendHost = "http://localhost:8080";
}

export const API_BASE_URL = `${backendHost}`;