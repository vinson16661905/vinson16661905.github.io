// 参数 param 可以改成你要传的内容
function recordParam(param) {
  fetch('https://script.google.com/macros/s/AKfycbwFKgcaQp4X2nTeTcp-e2OKLy5ZJz-GBebPjbIe0ZRyaPDdsdVPhf8KBTXIhICXqn39xg/exec?param=' + encodeURIComponent(param))
    .then(response => response.text())
    .then(data => console.log(data));
}
