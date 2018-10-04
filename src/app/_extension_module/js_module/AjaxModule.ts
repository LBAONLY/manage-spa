
function AjaxModule(httpMethod: string, url: string, sendData: string) {

    return new Promise(function (resolve, reject) {

        const xhr: any = new XMLHttpRequest();

        xhr.open(httpMethod, url);
        xhr.setRequestHeader( 'Content-type' , 'application/json');
        xhr.send(sendData);
        xhr.onload = function () {
            if (200 <= xhr.status && xhr.status <= 299) {
                resolve(xhr.responseText);
            } else {
                reject(Error(xhr.statusText));
            }
        };
        xhr.onerror = function () {
            reject(Error('Network error.'));
        };
    });
}
function postSync(url: string, sendData: string) {

  return new Promise(function (resolve, reject) {

      const xhr: any = new XMLHttpRequest();

      xhr.open('post', url, false);
      xhr.setRequestHeader( 'Content-type' , 'application/json');
      xhr.send(sendData);
      xhr.onload = function () {
          if (200 <= xhr.status && xhr.status <= 299) {
              resolve(xhr.responseText);
          } else {
              reject(Error(xhr.statusText));
          }
      };
      xhr.onerror = function () {
          reject(Error('Network error.'));
      };
  });
}
function getAsync(url: string) {
    return AjaxModule('get', url, null);
}

function postAsync(url: string, postData: object) {
    return AjaxModule('post', url , JSON.stringify(postData));
}

// 使用方法
// postAsync('http://localhost:53599/api/values', { user_id: 'addaas'}).then(data => {

// });

export { getAsync , postAsync , postSync };
