import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  digits=["one","Two","Three","Four","Five","Six","Seven","Eight","nine","Ten"]
  numbers:any=["one","Two","Three","Four","Five","Six","Seven","Eight","nine","Ten"];
  name="Ganesh yadav is doing intern in ss&c technologies"
  filterName:any=""
appStatus=new Promise((resolve,reject)=>{
  setTimeout(()=>
  {
    resolve('status');
  },2000)
}

)
  constructor() { }

  ngOnInit(): void {
  }
  addNumber()
  {
    this.numbers.push("eleven");
  }

}
