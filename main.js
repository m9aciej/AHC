//Node.js 6.5

//mapa


function changeState(wiersz,kolumna,proba){
    
    
    document.body.appendChild(document.createElement("h1"));
    document.querySelector("h1").textContent = `Proba: ${proba}`;
    
    for(let i = 0;i<rt.length;i++){
        for(let j = 0; j<rt[i].length;j++){
            const div = document.createElement("div");
            if(rt[i][j]==-1){
                div.style.backgroundColor = "black";
            }
            // if(rt[i][j]==0){
            // 	div.style.backgroundColor = "white";
            // }
             div.textContent = rt[i][j];
            document.body.appendChild(div);
            if(wiersz==i && kolumna == j){
                div.classList.add("actualElement");
            }
        }
        document.body.appendChild(document.createElement("br"));	
    }
    

}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

let rt = [[0, 0, 0, 0,  0, 1],
          [0,-1,-1, 0, -1, 0],
          [0,-1, 0, 0, -1, 0],
          [0,-1, 0, 0, -1, 0],
          [0,-1, 0,-1, -1, 0],
          [0, 0, 0, 0,  0, 0]];
// możliwe akcje do wykonania
// 0 - lewo, 1 - prawo, 2 - góra, 3 - dół
A = [0, 1, 2, 3];

//funkcja wartości  //V = ones(size(rt)); % 
let V = [[1, 1, 1, 1, 1, 1],
         [1, 1, 1, 1, 1, 1],
         [1, 1, 1, 1, 1, 1],
         [1, 1, 1, 1, 1, 1],
         [1, 1, 1, 1, 1, 1],
         [1, 1, 1, 1, 1, 1]];
// funkcja strategii mi = zeros([size(rt) length(A)]);
let mi = [];
mi[0] = [[0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0]];
//console.log(mi[0][1][3])
mi[1] = [[0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0]];
mi[2] = [[0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0]];
mi[3] = [[0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0]];

let rand = 0.05; // narazie takie cos
//parametry argorytmu
let epsilon = 0.055;
let gamma = 0.9; // współczynnik dyskontowania
let alfa = 0.5; // współczynnik aktualizacji funkcji strategii mi
let beta = 0.5; // współczynnik aktualizacji funkcji wartości V
let k = 0; // początkowy wiersz
let l = 0; // początkowa kolumna
let sciezka = [];
let proba = 1;
let akcja = 0;
//let akcja;
let akcje_zach = [];
let max_mi;
let i,j;
let iii=1;

while(iii) {
    // obserwuj aktualny stan x 
    i = k, j = l;
    let a = (mi[0][i][j]);
     let b = (mi[1][i][j]);
      let c = (mi[2][i][j]);
       let d = (mi[3][i][j]);
       
    max_mi = Math.max(a, b, c, d);   // pierwsze tab, kolumna i wiersz  
    //wyznacz zbiór akcji mi[0][j][k] jako mi[0][j][k] akcji o największej mi-wartości
    //console.log(max_mi)
    //break;
    
    
    for(let n=0;n<4 ;n++){
    
    	//console.log(n)
        //mi[parseInt(n)][k][j]
        if (mi[n][i][j] == max_mi) {
        	//console.log(n) 
           akcje_zach.push(n)
        }
        
       // console.log(akcje_zach);
        //console.log(akcje_zach[0]);
        //console.log(akcje_zach[3]);
    } //  console.log(akcje_zach);

    rand = Math.random();
    
    if (rand > epsilon)
       akcja = akcje_zach[(Math.floor(rand*(akcje_zach.length - 1 )))];
    else
    akcja = A[(Math.floor(rand*A.length))];
   
    //else{
      //  akcja = A[(Math.floor(rand*A.length))];        
        //
   // }
  
   // console.log(akcja)
    // wykonaj akcję a i obserwuj następny stan x'
    
    switch (akcja){
        
    case 0:
      //  console.log("stan 0");
        k = i; 
        l = j - 1;
        if (((k >= 0 && k <= 5 && l >= 0 && l <= 5) != true) || rt[l][k] == -1){
            k = i; l = j;   
        };
        break;
    case 1:
     //   console.log("stan 1");
        k = i; 
        l = j + 1;
        if (((k >= 0 && k <= 5 && l >= 0 && l <= 5) != true) || rt[l][k] == -1){
        k = i; l = j;             
        };
    break;
    case 2:
       // console.log("stan 2");
        k = i - 1; l = j;   
        if (((k >= 0 && k <= 5 && l >= 0 && l <= 5) != true) || rt[l][k] == -1){
            k = i; l = j;
            
        }
    break;
    case 3:
      //  console.log("stan 3");
        k = i + 1; l = j;
        if (((k >= 0 && k <= 5 && l >= 0 && l <= 5) != true) || rt[l][k] == -1){
            k = i; l = j;        
        }
    break; 
    }
    
    // zapamiętaj wykonaną akcję
    sciezka += akcja;
    // obserwuj wzmocnienie r
    r = rt[k, l];

    //oblicz błąd TD
    delta = r + gamma*V[k][l] - V[i][j];
 
    // uaktualnij V(x)
    V[i][j] = V[i][j] + alfa*delta;
    // uaktualnij mi(x, a)
    //console.log(akcja1);
    mi[akcja][i][j] = mi[akcja][i][j] + beta*delta;
   
    
    
    // sleep(1000);
    
    
        changeState(k,l,proba);
   
        // Handler when all assets (including images) are loaded

    if (k == 0 && l == 5){
       console.log(sciezka + "\n");
       if ( sciezka.length == 5){
        //console.log(proba);	 
        //break;
        iii=0;
           
           	

    }else{
        document.body.innerHTML = '';
    }
        
        sciezka = [];
        proba = proba + 1;
        
        k = 0;  l = 0; 
    }
 
    
    //break;
    
}


    



