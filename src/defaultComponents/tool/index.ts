import jwt from "jsonwebtoken";

// @def : set cookie
// @param :
// @ - name : cookie name
// @ - value : cookie value
// @ - day : period of cookie use
// @ - domain : cookie domain
export function setCookie(
  name: string,
  value: string,
  day: number,
  domain: string
) {
  var date = new Date();
  date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/;domain=${domain};`;
}
