var jimp = require('jimp');

const originaldir = './Originals/';

const thumbnaildir = './Thumbnail/';

let myPromise= jimp.read(originaldir + 'hong-son.jpeg')
.then((img)=>{

   return img.resize(125,125).quality(60).write(thumbnaildir+ 'hong-son.jpeg');



}).catch((error)=>{

    console.log(error);

});

Promise.resolve(myPromise).then(()=>{

    console.log('done');

});
   
   



