
var x, y;
var bool = true;
var m;


function setup() {
  var canvas = createCanvas(300, 170);
  canvas.parent('airFoilSketch-holder');
  noLoop();
  // Starts in the middle
  x = 1 ;
  y = 20;
 
  
}

function draw() {


  var xg = [];
  for(var i = 0; i < 20; i++){

          xg[i] = [];
      for(var j = 0; j < 40; j++){
          xg[i][j] = undefined;
      }
  }
  var yg = [];
  for(var i = 0; i < 20; i++){

      yg[i] = [];
    for(var j = 0; j < 40; j++){
        yg[i][j] = undefined;
    }
}
  var rg = [];
  for(var i = 0; i < 20; i++){

        rg[i] = [];
    for(var j = 0; j < 40; j++){
        rg[i][j] = undefined;
    }
}
  var thg = [];
  for(var i = 0; i < 20; i++){

      thg[i] = [];
  for(var j = 0; j < 40; j++){
      thg[i][j] = undefined;
  }
}
  var xm = [];
  for(var i = 0; i < 20; i++){

      xm[i] = [];
  for(var j = 0; j < 40; j++){
      xm[i][j] = undefined;
  }
}
  var ym = [];
  for(var i = 0; i < 20; i++){

      ym[i] = [];
  for(var j = 0; j < 40; j++){
      ym[i][j] = undefined;
  }
}

var exes = [new Array(8)];
var whys = [new Array(8)];
var camx = [new Array(19)];
var camy = [new Array(19)];
var thet;
var rdm;
var thtm;
var rval = getrVal();
var xcval = getxcVal();
var ycval = getycVal();
var convdr = getConvdr();
var angle = getAngle();
var fact = 30.0;  
var xt = 170;
var yt = 105;
var radvec = 0.5;
var pi = 3.1415;
var slope;
var xvec;
var yvec;
var l,m;
var nptc = 37;
var npt2 = nptc/2 + 1 ;
var rnew;
var thet;
var psv;
var fxg;
var stfact;
var vel = getVelocity();
var k;
var index;
var nlnc = 15;
var nln2 = nlnc/2 + 1 ;
var xflow = -10.0;
var radm,thetm ;                /* MODS  20 Jul 99  whole routine*/
var fnew,ynew,yold,rfac,deriv ;
var xold,xnew,thet ;
var rmin,rmax ;
var iter,isign;
var convdr = getConvdr();
var alfval = getAngle();
var rval = getrVal();
var lrg,lthg,lxgt,lygt;
var lxgt,lygt;
var lrgt,lthgt;
var lxm, lym;
var lxmt, lymt;
var xcval = getxcVal();
var ycval = getycVal();
var gamval = getGamVal();
var ur,uth,jake1,jake2,jakesq ;
var xloc,yloc,thrad,alfrad ;
var deltb = 0.5;
var vxdir;
var usq;
var rad;
var vel;
var pres;
var leg,teg,lem,tem;
var chrd,clift;
var radvec;
var iter;
var x1 = 0;
var x2 = 0;
var y1 = 0;
var y2 = 0;
var div = 100;


var c = color('white');
  background('black');
  push();
  // Draw a circle
  stroke(50);
  fill(c);
  
 

 for(var index = 1; index <= nptc; index++){



    thet = (index - 1) * 360 / (nptc - 1);
    xg[0][index] = rval * Math.cos(convdr * thet) + xcval;
    yg[0][index] = rval * Math.sin(convdr * thet) + ycval;
    rg[0][index] = Math.sqrt(xg[0][index] * xg[0][index] + yg[0][index] * yg[0][index]);
    thg[0][index] = Math.atan2(yg[0][index], xg[0][index]) / convdr;
    xm[0][index] = (rg[0][index]  + 1.0 / rg[0][index]) * Math.cos(convdr * thg[0][index]);
    ym[0][index] = (rg[0][index]  - 1.0 / rg[0][index]) * Math.sin(convdr * thg[0][index]);
    rdm = Math.sqrt(xm[0][index] * xm[0][index] + ym[0][index] * ym[0][index]);
    thtm = Math.atan2(ym[0][index], xm[0][index]) / convdr;
    xm[0][index] = rdm * Math.cos((thtm - angle) * convdr);
    ym[0][index] = rdm * Math.sin((thtm - angle) * convdr);
    

    
    exes[1] = (fact * (xm[0][index])) + xt;
    whys[1] = (fact * (-ym[0][index])) + yt;
    exes[2] = (fact * (xm[0][index])) + xt;
    whys[2] = (fact * (-ym[0][index])) + yt;


    

    for(var i = 0; i<= npt2 - 1; i++){

     
      exes[0] = exes[1] ;
      whys[0] = whys[1] ;
      exes[1] = (int) (fact*(ym[0][npt2-i])) + xt ;
      whys[1] = (int) (fact*(-ym[0][npt2-i])) + yt ;
      exes[3] = exes[2] ;
      whys[3] = whys[2] ;
      exes[2] = (fact*(xm[0][npt2+i])) + xt ;
      whys[2] = (fact*(-ym[0][npt2+i])) + yt ;
      camx[i] = (exes[1] + exes[2]) / 2 ;
      camy[i] = (whys[1] + whys[2]) / 2 ;

    
     
       
    
    polygon(exes[3],whys[3],2,10);
    
    

    

    }


    
 


 

}


for( k = 1; k <= nlnc; k++){

        
        
  psv = getPSV(k,nln2);
  fxg = getFxg();
  
 
  for(index = 1; index <= nptc; index++ ){

      lyg = getLyg(fxg,psv);
      
      lrg = Math.sqrt(fxg*fxg + lyg*lyg) ;
      lthg = Math.atan2(lyg,fxg)/convdr ;
      lxgt = lrg * Math.cos(convdr*(lthg + alfval)) ;
      lygt = lrg * Math.sin(convdr*(lthg + alfval)) ;
 
                        // translate cylinder to generate airfoil 
      lxgt = lxgt + xcval ;
      lygt = lygt + ycval ;
      lrgt = Math.sqrt(lxgt*lxgt + lygt*lygt) ;
      lthgt = Math.atan2(lygt,lxgt)/convdr ;
                         //  Kutta-Joukowski mapping 
      lxm = (lrgt + 1.0/lrgt)*Math.cos(convdr*lthgt) ;
      lym = (lrgt - 1.0/lrgt)*Math.sin(convdr*lthgt) ;
                        // tranforms for view fixed with free stream 
          // take out rotation for angle of attack mapped and cylinder 
      radm = Math.sqrt(lxm*lxm+lym*lym) ;
      thetm = Math.atan2(lym,lxm)/convdr ;
      lxmt = radm*Math.cos(convdr*(thetm-alfval)) ;
      lymt = radm*Math.sin(convdr*(thetm-alfval)) ;

      lxgt = lxgt - xcval ;
      lygt = lygt - ycval ;
      lrgt = Math.sqrt(lxgt*lxgt + lygt*lygt)  ;
      lthgt = Math.atan2(lygt,lxgt)/convdr;
      lxgt = lrgt * Math.cos((lthgt - alfval)*convdr);
      lygt = lrgt * Math.sin((lthgt - alfval)*convdr);
      
      
     xg[k][index]  = lxgt ;
     yg[k][index]  = lygt ;
     rg[k][index]  = lrgt ;
     thg[k][index] = lthgt ;
     xm[k][index]  = lxmt ;
     ym[k][index]  = lymt ;
    
                                      //stall model
     if (alfval > 10.0 && psv > 0.0) {
          if (xm[k][index] > 0.0) {
              ym[k][index] = ym[k][index -1] ;
      }
 }

       if (alfval < -10.0 && psv < 0.0) {
          if (xm[k][index] > 0.0) {
               ym[k][index] = ym[k][index -1] ;
      }
 }

rad = lrg;   
theta = lthg;

     
thrad = convdr * theta ;
alfrad = convdr * alfval ;
                        // get x, y location in cylinder plane 
xloc = rad * Math.cos(thrad) ;
yloc = rad * Math.sin(thrad) ;
                        // velocity in cylinder plane 
ur  = Math.cos(thrad-alfrad)*(1.0-(rval*rval)/(rad*rad)) ;
uth = -Math.sin(thrad-alfrad)*(1.0+(rval*rval)/(rad*rad)) - gamval/rad;
usq = ur*ur + uth*uth ;
vxdir = ur * Math.cos(thrad) - uth * Math.sin(thrad) ; // MODS  20 Jul 99 
                        // translate to generate airfoil  
xloc = xloc + xcval ;
yloc = yloc + ycval ;
                           // compute new radius-theta  
rad = Math.sqrt(xloc*xloc + yloc*yloc) ;
thrad  = Math.atan2(yloc,xloc) ;
                           // compute Joukowski Jacobian  
jake1 = 1.0 - Math.cos(2.0*thrad)/(rad*rad) ;
jake2 = Math.sin(2.0*thrad)/(rad*rad) ;
jakesq = jake1*jake1 + jake2*jake2 ;


if (Math.abs(jakesq) <= .01){

jakesq = .01 ;

}// protection 

vsq = usq / jakesq ;
  // vel is velocity ratio - pres is coefficient  (p-p0)/q0   

vel = Math.sqrt(vsq) ;
pres = 1.0 - vsq ;


fxg = fxg + vxdir * deltb;

  
        

}




}




radvec = .5 ;
          for (j=1; j<=nln2; ++j) {           // lower half 
             for (i=1 ; i< 27; i = i + 2) {
                exes[0] = (int) (fact*xm[j][x + i]) + xt ;
                whys[0] = (int) (fact*(-ym[j][x + i])) + yt ;
                slope = (ym[j][i+1]-ym[j][i])/(xm[j][i+1]-xm[j][i]) ;
                xvec = xm[j][i] + radvec / Math.sqrt(1.0 + slope*slope);
                yvec = ym[j][i] + slope * (xvec - xm[j][i]) ;
                exes[1] = (int) (fact*xvec) + xt ;
                whys[1] = (int) (fact*(-yvec)) + yt ;
                exes[1] = (int) (fact*xm[j][x + i + 1]) + xt ;
                whys[1] = (int) (fact*(-ym[j][x + i + 1])) + yt ;
                                   // MODS  21 JUL 99 
                
                if( (i % 5 == 0 || i % 9 == 0) && getVelocity() != 0)
                    stroke('white');
                else if(getVelocity() == 0)
                    stroke('black');
                else
                    stroke('cyan');
                

                line(exes[0],whys[0],exes[1],whys[1]) ;
                                   
  

            }
            

        }

    
       
    
       
        
        for (j=7; j<=nlnc; ++j) {           // upper half 
          for (i=1 ; i< 27; i = i + 2) {
            exes[0] = (int) (fact*xm[j][x + i]) + xt ;
            whys[0] = (int) (fact*(-ym[j][x + i])) + yt ;
            slope = (ym[j][x+i]-ym[j][x])/(xm[j][x+i]-xm[j][x]) ;
            xvec = xm[j][x] + radvec / Math.sqrt(1.0 + slope*slope);
            yvec = ym[j][x] + slope * (xvec - xm[j][x]) ;
            exes[1] = (int) (fact*xvec) + xt ;
            whys[1] = (int) (fact*(-yvec)) + yt ;
            exes[1] = (int) (fact*xm[j][x + i + 1]) + xt ;
            whys[1] = (int) (fact*(-ym[j][x + i + 1])) + yt ;
            
                                // MODS  21 JUL 99 
             
               
            if( (i % 5 == 0 || i % 9 == 0) && getVelocity() != 0)
                stroke('white');
            else if(getVelocity() == 0)
                stroke('black');
            else
                stroke('cyan');

            line(exes[0],whys[0],exes[1],whys[1]) ;


         }

     }
        
    
    calculateLift();
    calculateDrag();    
    plotGraph();   
        

  x = x + 1;
  
  
  if( x > 10)
  x = 5;

  timer()

  
}




function polygon(x, y, radius, npoints) {
  var angle = 2 * pi / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function timer(){

    var velocity = getVelocity();
    if(velocity == 0)
        velocity = 200;
    else if(velocity == 10 )
        velocity = 190;
    else if(velocity == 20)
        velocity = 180;
    else if(velocity == 30)
        velocity = 170;
    else if (velocity == 40)
        velocity = 160;
    else if(velocity == 50)
        velocity = 150;
    else if(velocity == 60)
        velocity = 140;
    else if(velocity == 70)
        velocity = 130;
    else if(velocity == 80)
        velocity = 120;
    else if(velocity == 90)
        velocity = 110;
    else if(velocity == 100)
        velocity = 100;
    else if(velocity == 110)
        velocity = 95;
    else if(velocity == 120)
        velocity = 90;
    else if(velocity == 130)
        velocity = 85;
    else if(velocity == 120)
        velocity = 80;
    else if(velocity == 130)
        velocity = 75 ;
    else if(velocity == 120)
        velocity = 70;
    else if(velocity == 130)
        velocity = 65;
    else if(velocity == 140)
        velocity = 60;
    else if(velocity == 150)
        velocity = 55;
    else if(velocity == 160)
        velocity = 50;
    else if(velocity == 170)
        velocity = 45;
    else if(velocity == 180)
        velocity = 40;
    else if(velocity == 190)
        velocity = 35;
    else if(velocity == 200)
        velocity = 30;
    else if(velocity == 210)
        velocity = 25;
    else if(velocity == 220)
        velocity = 20;
    else if(velocity == 230)
        velocity = 15;
    else if(velocity == 240)
        velocity = 10;
    else if(velocity == 250)
        velocity = 5;
            

    var myVar = setTimeout(redraw, velocity);

}


 