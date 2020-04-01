 const openimage = document.createElement('div')
 openimage.id= 'openimage'
 document.body.appendChild(lightbox)

 const images = document.querySelectorAll('img')
 images.forEach(image =>){
   image.addEventListener('click, e=>'){
     lightbox.classList.add('active')
     const img = document.createElement('img')
     img.src = image.src
     lightbox.appendChild(img)
   })
 })
