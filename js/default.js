console.log("200 STATUS");



/*variable */

const ta1 = document.getElementById("in1");
const ta2 = document.getElementById("in2");
const ta3 = document.getElementById("in3");
const ta4 = document.getElementById("in4");


const load = document.getElementById("load");

const output = document.getElementById("bool-output");




/*LAOD BUTTON FUNCTION */

load.addEventListener("click", function(){
    /*Box ONE */
    box1 = ta1.value;
    var bool1="";
    var box1List = box1.split(",");
    for ( let i=0; i<box1List.length ;i++){
        const keyword = box1List[i];
        console.log(keyword);
        if (i==0){
            bool1 = `("${keyword}" OR `  ;
            console.log("zero");

        }
        else if (i==(box1List.length-1)){
            bool1 = bool1 + '"' + keyword + `")`  ;
            console.log("last");
        }
        else{
            bool1 = bool1 + '"'+ keyword +'"' + ` OR `;
        
        };


    };
    console.log(bool1);

    /**BOX TWO */
    box2 = ta2.value;
    var bool2="";
    var box2List = box2.split(",");
    for ( let i=0; i<box2List.length ;i++){
        const keyword = box2List[i];
        console.log(keyword);
        if (i==0){
            bool2 = `("${keyword}" OR `  ;
            console.log("zero");

        }
        else if (i==(box2List.length-1)){
            bool2 = bool2 + '"' + keyword + `")`  ;
            console.log("last");
        }
        else{
            bool2 = bool2 + '"'+ keyword +'"' + ` OR `;
        
        };


    };
    console.log(bool2);

        /**BOX THREE */
        box3 = ta3.value;
        var bool3="";
        var box3List = box3.split(",");
        for ( let i=0; i<box3List.length ;i++){
            const keyword = box3List[i];
            console.log(keyword);
            if (i==0){
                bool3 = `("${keyword}" OR `  ;
                console.log("zero");
    
            }
            else if (i==(box3List.length-1)){
                bool3 = bool3 + '"' + keyword + `")`  ;
                console.log("last");
            }
            else{
                bool3 = bool3 + '"'+ keyword +'"' + ` OR `;
            
            };
    
    
        };
        console.log(bool3);

            /**BOX FOUR */
            box4 = ta4.value;
            var bool4="";
            var box4List = box4.split(",");
            for ( let i=0; i<box4List.length ;i++){
                const keyword = box4List[i];
                console.log(keyword);
                if (i==0){
                    bool4 = `("${keyword}" OR `  ;
                    console.log("zero");
        
                }
                else if (i==(box4List.length-1)){
                    bool4 = bool4 + '"' + keyword + `")`  ;
                    console.log("last");
                }
                else{
                    bool4 = bool4 + '"'+ keyword +'"' + ` OR `;
                
                };
        
        
            };
            console.log(bool4);

        /**COMBINE */
        var booleanStr = bool1 + " AND " + bool2 + " AND " + bool3 + " AND " + bool4;
        console.log(booleanStr);

        output.value = booleanStr;





    
});


/**india, england, ireland, scotland */
/**construction , bruhmoments , coding */

/**swag , pussy , leg, jegg */

/**this,is,a,text */