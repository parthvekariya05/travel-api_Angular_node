import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Schema } from '../schema';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.css'
})

export class TravelComponent {
  data:Schema[]=[];
      constructor(private __apitravel:ApiserviceService){}
      ngOnInit(){
        this.__apitravel.getall().subscribe((res:any)=>{
            this.data=res;
        }); 
      }
      delete(id:any){
        this.__apitravel .delete(id).subscribe((res)=>{
          this.ngOnInit();
        });
      }
}