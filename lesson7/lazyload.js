const imagesToload=document.querySelectorAll("img[data-src]");
const imgOptions={
    threshold:0,
    rootMargin:"0px 0px 50px 0px"
};
const loadImages=(image)=>{
    image.setAttribute('src',image.getAttribute('data-src'));
    image.onload=()=>{image.removeAttribute('data-src');};
};

if('intersectionObserver' in window){
    const imageObserver=new IntersectionObserver((items,observer)=>{
        items.forEach((items)=>{});
        }, imageOptions);
    imagesToload .forEach((img)=>{
        imgObserver.observer(img);
    });
}
    else {
        imagesToload.forEach((img)=>{
            loadImages(img);
        });
    }

    
