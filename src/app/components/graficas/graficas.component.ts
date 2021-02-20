import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { GraficaServiceService } from '../../services/grafica-service.service';


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.sass']
})
export class GraficasComponent implements OnInit {

  lineChartData: any[] = [];
  lineChartLabels: Label[] = [];
 
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line'; 

  constructor(private graficaService: GraficaServiceService) { }

  ngOnInit(): void {
    this.getDataGrafic();
  }

  async getDataGrafic(){
    await this.graficaService.obtenerDatosgrafica()
      .subscribe(async res => {
        const {sales} = res;
        await this.arrLabels(sales);
        await this.arrData(sales);
      })
  }

  arrLabels(sales: any){
    let labels = sales.map((carro: any) => {
      return carro.car_make;
    });
    this.lineChartLabels = Array.from(new Set(labels))
  }

  arrData(sales: any){
    for (var i = 0; i < this.lineChartLabels.length; i++) {
      let arrCarros = sales.filter((carro: any) => {
          return carro.car_make === this.lineChartLabels[i];
      })
      let arrQuantity = arrCarros.map((carro2: any) => carro2.quantity);
      this.lineChartData.push({data: arrQuantity, label: this.lineChartLabels[i]});
    }  
  }

}
