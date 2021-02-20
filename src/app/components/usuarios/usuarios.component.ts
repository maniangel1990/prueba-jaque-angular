import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { UsuarioServiceService } from '../../services/usuario-service.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  //usuarios: any;
  ELEMENT_DATA: PeriodicElement[] = [];
  dataSource = new MatTableDataSource<PeriodicElement>([]);

  constructor(private userService: UsuarioServiceService) { 
    this.obtenerListaUsuarios();
  }

  ngOnInit(): void {}

  async obtenerListaUsuarios(){
    this.userService.obtenerUsuarios()
      .subscribe(res => {
        this.ELEMENT_DATA = res.users;
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        //this.totalUsuarios = res.length;
      });   
  }

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'gender', 'image'];
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

}

export interface PeriodicElement {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  image: string;
}


