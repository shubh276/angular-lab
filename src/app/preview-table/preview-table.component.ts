import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-table',
  templateUrl: './preview-table.component.html',
  styleUrls: ['./preview-table.component.css']
})
export class PreviewTableComponent implements OnInit {
    data = [
      {fromDate: '2014-04-22', name: 'shubham', progress: '10', color: 'red'},
      {fromDate: '2016-05-15', name: 'arpit', progress: '20', color: 'red'},
      {fromDate: '2015-03-28', name: 'mudit', progress: '100', color: 'blue'},
      {fromDate: '2016-07-15', name: 'nitish', progress: '90', color: 'lime'},
      {fromDate: '2016-07-14', name: 'nitish', progress: '90', color: 'lime'},
      {fromDate: '2016-07-20', name: 'nitish', progress: '80', color: 'orange'},
      {fromDate: '2016-01-20', name: 'antima', progress: '60', color: 'white'},
      {fromDate: '2016-10-01', name: 'arpit', progress: '60', color: 'white'},
      {fromDate: '2014-05-15', name: 'antima', progress: '60', color: 'white'},
      {fromDate: '2015-05-15', name: 'arpit', progress: '50', color: 'orange'},
      {fromDate: '2016-01-02', name: 'antima', progress: '40', color: 'purple'}
    ];

  columns = [
    {uniqueId: 'fromDate', displayName: 'Date', sortable: true, dropDownFilter: false},
    {uniqueId: 'name', displayName: 'Name', sortable: false, dropDownFilter: true},
    {uniqueId: 'progress', displayName: 'Progress', sortable: true, dropDownFilter: false},
    {uniqueId: 'color', displayName: 'Color', sortable: false, dropDownFilter: true},
  ];
  rowSelect = true;
  hoverTableRow = true;
  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ng on it');
  }

  onRowClick(event) {
    console.log('row click');
  }

  onRowSelect(event) {
    console.log('row select/unselect');
  }

  onRowDoubleClick(row) {
    console.log('doubkle click');
  }

}
