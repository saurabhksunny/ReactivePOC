import { Component, OnInit,ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';

import { PanServiceService } from '../pan-service.service';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent implements OnInit {
  nameV = '';
  panV = '';
  validPANName: boolean = false;
  successPan: boolean = false;
  validPANNum: boolean = false;
  validCount: boolean = false; 
 
  constructor(private panService: PanServiceService) { 
  }

  ngOnInit() {}

  /* checking for each key up
      if length is equal to 10 then validate button should appear
      otherwise button is disabled 
  */
  onKeydown(event) {
    if(this.panV.length==10){
      this.validCount=true;
    }else if(this.panV.length!=10){
      this.validCount=false;
    }
  } 

  verifyPANDetails() {
    const enteredName = this.nameV;
    const enteredPAN = this.panV;
    this.panService.getConfig().subscribe( 
      (data:any) => {
        console.log(data);
        let panNum = JSON.parse(data.item[0].request.body.raw);
        if(enteredName === data.item[0].request.header[4].value && enteredPAN === panNum.data.pan) {
          this.validPANName = false;
          this.validPANNum = false;
          this.successPan = true;
        } else if(enteredName !== data.item[0].request.header[4].value) {
          this.validPANName = true;
        }
        else if( enteredPAN !== panNum.data.pan){
          this.validPANNum = true;
        }
      }
    );
  }

}
