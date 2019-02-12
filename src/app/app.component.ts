import { TableService } from './table.service';
import {Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nama = 'episkuswono-TI2A';
  alamat = 'jl. Manggis, Selametharjo'
  tanggal = Date.now();
  hby: any[];
  constructor(private tableserve:TableService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.hby = this.tableserve.getEpis();
  }
}
