function creatCard(title,cName,video,monthsold,duration ,thumbnail){
    let viewStr;
    if(views <1000000){
         viewStr = views/1000 +"k";
    }
    else if(views >=1000000){
         viewStr = views/1000000 +"M";
    }
    else{
        viewStr = views/1000 +"k";
    }

    let html = ` <div class="card">
            <div class="image">
                <img src="$(thumbnail)" alt="">
                <div class="capsule">$(duration)</div>
                
            </div>
            <div class="text">
                <h1> $(title) </h1>
                <p>$(cName).$(viewStr) views.$(monthsOld)moonths ago </p>
            </div>
        </div> `
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML +html

}