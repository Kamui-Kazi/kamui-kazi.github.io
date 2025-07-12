export function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString(); // 864e5 = 24*60*60*1000
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/`;
}

export function getCookie(name) {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
}
