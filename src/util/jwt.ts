export function parseJwt(token: string) {
  if (token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }
  return undefined;
}

interface Token {
  exp: number;
  id: string;
  iat: number;
}

export function isTokenExpired({ exp }: Token) {
  const givenDate = new Date(exp * 1000);
  // Get the current date
  const currentDate = new Date();

  // Compare the two dates using getTime() method and check if the given date is in the past
  return givenDate.getTime() < currentDate.getTime();
}
