function imgToSquare(img) {
    var inImg = new SimpleImage(img);
    if (inImg.getHeight() === inImg.getWidth()) {
        return inImg;
    }
    var minSide = (inImg.getHeight() < inImg.getWidth() ? inImg.getHeight() : inImg.getWidth());
    var outImg = new SimpleImage(minSide, minSide);
    
    for (var pixel of inImg.values()){
        outImg.setPixel(cutCenter(minSide,inImg.getWidth(),pixel.getX()), cutCenter(minSide,inImg.getHeight(),pixel.getY()),pixel);
    }
    
    return print(outImg);
}

function cutCenter(minSide, bySide, byCoordinate){
    if(byCoordinate > ((bySide-minSide) / 2) && byCoordinate < (bySide - (bySide-minSide) / 2))
        {
            return byCoordinate-(bySide-minSide)/2;
        }
    return;
}