export default function canonize(url) {
  const re = new RegExp('@?(https?:)?(\/\/)?(www.)?((telegram|vk|vkontakte|twitter|github)[^\/]*\/)?([a-zA-Z0-9.]*)', 'i');
  const username = url.match(re)[6];
  return '@' + username;
}
