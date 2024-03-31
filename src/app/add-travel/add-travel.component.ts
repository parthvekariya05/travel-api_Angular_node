import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrl: './add-travel.component.css'
})
export class AddTravelComponent {
  id=-1;
  btname="ADD";
  constructor(private __api:ApiserviceService,private router:Router,private actroute:ActivatedRoute){

  }
    myForm=new FormGroup({
      id:new FormControl(''),
      TravellerName:new FormControl(''),
      Destination:new FormControl(''),
      ExpenseAmount:new FormControl(''),
      ExpenseDate:new FormControl(''),
    });

    ngOnInit(){
        if(this.actroute.snapshot.params['id']!=null){
          this.btname="EDIT";
            this.id=this.actroute.snapshot.params['id'];
            this.__api.getbyid(this.id).subscribe((res:any)=>{
                this.myForm.controls.id.setValue(res.id);
                this.myForm.controls.TravellerName.setValue(res.TravellerName);
                this.myForm.controls.Destination.setValue(res.Destination);
                this.myForm.controls.ExpenseAmount.setValue(res.ExpenseAmount);
                this.myForm.controls.ExpenseDate.setValue(res.ExpenseDate);
              
            })
        }
    }

    insert(){
      if(this.id>0){
        this.__api.update(this.id,this.myForm.value).subscribe((res)=>{
          this.router.navigate(['']);
      }); 
      }
      else
      {
          this.__api.insert(this.myForm.value).subscribe((res)=>{
          this.router.navigate(['']);
          }); 
      }
     
    }
    
}
