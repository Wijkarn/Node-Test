const img = document.createElement('img');
document.body.append(img);

//URL(relativePath, moduleUrl)
const imgUrl = new URL('../assets/leia.jpg', import.meta.url);
img.src = imgUrl.href;

console.log(imgUrl);

console.log(import.meta);