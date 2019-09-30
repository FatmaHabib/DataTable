import { Component,Input, OnInit,ViewChild } from '@angular/core';
import { Photos } from '../models/photos-model';
import {MatSort, MatTableDataSource,MatPaginator, Sort} from '@angular/material';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  //Table data
tableData:MatTableDataSource<Photos>;
//Data size to use in pagination
dataCount:number;
//Number of displayed data in one page
pageSize:number;
//Table headers 
displayedColumns:string[]=['ID','Title','Photo'];
//Viewchild to observe sort changes
@ViewChild(MatSort,null) sort:MatSort;
//Viewchild to observe pagination changes

@ViewChild(MatPaginator,null) paginator: MatPaginator;


  constructor() { }

  ngOnInit() {
    
  }
  // ngDoCheck() {

  // }
 //Sharing data from parent to child
  @Input()
  set data(data: Array<Photos>) {
    this.tableData =new MatTableDataSource(data);
    this.dataCount=data.length;
    this.pageSize=5;
    this.tableData.sort=this.sort;
    this.tableData.paginator = this.paginator;
  }
  get data(): Array<Photos> { return this.tableData.data; }
// Search function
  applyFilter(value:string){

    this.tableData.filter=value.trim().toLocaleLowerCase();
    
      }
      //Hearder sort function

      customSort(sort:Sort)
      {
        const data = this.tableData.data;
        if (!sort.active || sort.direction == '') {
          this.tableData.data = data;
          return;
        }
    
        this.tableData.data = data.sort((a, b) => {
          let isAsc = sort.direction == 'asc';
          switch (sort.active) {
            case 'ID': return this.compare(a.id, b.id, isAsc);
            case 'Title': return this.compare(a.title, b.title, isAsc);
         
            default: return 0;
          }
        });
      }    
     compare(a, b, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
 
}
