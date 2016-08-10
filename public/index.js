function post (url, data) {
  return new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open('POST', url, data);
    req.onload = function () {
      if (req.status === 200) resolve(req.response);
      else reject(Error(req.statusText));
    };
    req.onerror = function () {
      reject(Error('Network Error'));
    };
    req.send();
  });
}

let data = { width: screen.width, height: screen.height };
post('/logger', data).then(function (response) {
  console.log('Success!', response);
}, function (error) {
  console.error('Failed!', error);
});
