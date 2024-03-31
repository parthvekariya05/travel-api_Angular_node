import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { Schema } from '../schema';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrl: './travel-detail.component.css'
})
export class TravelDetailComponent {
  id=0;
  data:Schema = new Schema();
  constructor(private actroute:ActivatedRoute,private api:ApiserviceService,private router:Router) {

  }
  ngOnInit(){
    this.id=this.actroute.snapshot.params['id'];
    this.api.getbyid(this.id).subscribe((res:any)=>{
    this.data=res;
    })
  }
  delete(){
    this.api.delete(this.id).subscribe((res)=>{
      this.router.navigate(['/']);
    });
  }
}
