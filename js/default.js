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
    var box1 = ta1.value;
    if (box1 != ""){
        var bool1="";
        var box1List = box1.split(",");
        if (box1List.length==1){
            bool1 = `("`+box1List[0]+`")`;
        }
        else{
        for ( let i=0; i<box1List.length ;i++){
            const keyword = box1List[i];
            console.log(keyword);
            if (i==0){
                bool1 = ` ("${keyword}" OR `  ;
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
     };
        console.log(bool1);
    }

    else
    { var bool1 ="";

};

    /**BOX TWO */
    var box2 = ta2.value;
    if (box2 != ""){
        var bool2="";
        var box2List = box2.split(",");
        if (box2List.length==1){
            bool2 = ` AND ("`+box2List[0]+`")`;
        }
        else{
        for ( let i=0; i<box2List.length ;i++){
            const keyword = box2List[i];
            console.log(keyword);
            if (i==0){
                bool2 = ` AND ("${keyword}" OR `  ;
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
     };
        console.log(bool2);
    }

    else
    { var bool2 ="";

};

        /**BOX THREE */
        var box3 = ta3.value;
        if (box3 != ""){
            var bool3="";
            var box3List = box3.split(",");
            if (box3List.length==1){
                bool3 = ` AND ("`+box3List[0]+`")`;
            }
            else{
            for ( let i=0; i<box2List.length ;i++){
                const keyword = box3List[i];
                console.log(keyword);
                if (i==0){
                    bool3 = ` AND ("${keyword}" OR `  ;
                    console.log("zero");
    
                }
                else if (i==(box2List.length-1)){
                    bool3 = bool3 + '"' + keyword + `")`  ;
                    console.log("last");
                }
                else{
                    bool3 = bool3 + '"'+ keyword +'"' + ` OR `;
                
                };
    
    
            };   
         };
            console.log(bool3);
        }
    
        else
        { var bool3 ="";
    
    };

            /**BOX FOUR */
            var box4 = ta4.value;
            if (box4 != ""){
                var bool4="";
                var box4List = box4.split(",");
                if (box4List.length==1){
                    bool4 = ` AND ("`+box4List[0]+`")`;
                }
                else{
                for ( let i=0; i<box4List.length ;i++){
                    const keyword = box4List[i];
                    console.log(keyword);
                    if (i==0){
                        bool4 = ` AND ("${keyword}" OR `  ;
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
             };
                console.log(bool4);
            }
        
            else
            { var bool4 ="";
        
        };

        /**COMBINE */
        
        var booleanStr = bool1 + bool2 +  bool3 + bool4;
        console.log(booleanStr);

        output.value = booleanStr;





    
});


