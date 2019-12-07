import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  percent:number=50;
  radius:number=100;
  fullTime:any= "00:01:30";
  timer:any=false;
  progress:any=0;
  
  minutes:number =0;
  seconds:any=30;

  refresh:boolean=false;
  pause:boolean=false;

  elapsed:any = {
    h:'00',
    m:'00',
    s:'00'
  }

  overallTimer: any=false;
  constructor(public navCtrl: NavController) {

  }
  
  startTimer(){

    this.refresh=false;
    if(this.timer){
      clearInterval(this.timer);
    }
    if(!this.overallTimer){
      this.progressTimer();
    }

    this.timer=false;
    this.percent=0;
    this.progress=0;

    let timeSplit = this.fullTime.split(':');
    this.minutes = timeSplit[1];
    this.seconds = timeSplit[2];

    let totalSeconds = Math.floor(this.minutes * 60) + parseInt(this.seconds);

    this.timer = setInterval(() => {

    
      this.percent = Math.floor((this.progress / totalSeconds) * 100);
      this.progress++;
      if(this.percent == this. radius){
        clearInterval(this.timer);
      }

    }, 1000)


  }
  progressTimer(){
   let countDownDate = new Date();
   
   this.overallTimer = setInterval(() =>{
     let now = new Date().getTime();
     let distance = now - countDownDate.getTime();

     this.elapsed.h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 24));
     this.elapsed.m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     this.elapsed.s = Math.floor((distance % (1000 * 60)) / 1000);

     this.elapsed.h =  this.pad(this.elapsed.h, 2);
     this.elapsed.m =  this.pad(this.elapsed.m, 2);
     this.elapsed.s =  this.pad(this.elapsed.s, 2);


   }, 1000)
  }

  pad(num, size){
    let s = num+"";
    while(s.length < size) s = "0" + s;
    return s;
  }

}
