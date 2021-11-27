const canvas = new fabric.Canvas("canvas",{
    width: 512,
    height: 512,
    backgroundColor: "GREEN",
    preserveObjectStacking: true,
    
    
    
});
canvas.selection = false;
canvas.setOverlayImage('https://i.imgur.com/UFUcshF.png', canvas.renderAll.bind(canvas), {
    crossOrigin: 'anonymous'
});


/*fabric.Image.fromURL('https://i.imgur.com/fKJd9uO.png', function (img) {   
    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
      width: canvas.width, 
      height: canvas.height,
    });
  }, {crossOrigin: 'anonymous'}
);
*/
const reader  = new FileReader();

const imgAdded = (e) => {
    console.log(e)
    const inputElem = document.getElementById('myImg')
    const file = inputElem.files[0];
    
    
    reader.readAsDataURL(file)
}



const inputFile = document.getElementById("myImg");
inputFile.addEventListener('change', imgAdded)

reader.addEventListener("load",() =>{
    console.log(reader.result)
    fabric.Image.fromURL(reader.result, img2 =>{
        img2.scaleToWidth(169);
        //img2.scaleToHeight(165);
        img2.set('angle',343)
        //img2.rotate(343)
        img2.set('left',154)
        img2.set('top',292)
        img2.set('skewX', -7)
        img2.setCoords()
        canvas.add(img2,)
        canvas.item(0).hasControls = canvas.item(0).hasBorders = false;
        canvas.item(0).lockMovementY = true;
        canvas.item(0).lockMovementX = true;
       
        canvas.requestRenderAll()
    })
    
})



