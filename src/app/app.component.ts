import { Component ,OnInit} from '@angular/core';
import{ServiceService } from './services/service.service';
import { Photos } from './models/photos-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dataTableData=new Array <Photos>();
  constructor(public service: ServiceService)
{}
ngOnInit() {
  this.getData();
}
getData()
{
  this.service.get().subscribe(data=>{
    this.dataTableData=data;
  });
}
}
