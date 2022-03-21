import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChartsDemo';
  MobileSales: ChartData<'line'>={
    labels:['Samsung','OnePlus','IPhone','Vivo'],
    datasets:[
      {label:'Jan',data:[1000,4000,780,890]},
      {label:'Feb',data:[2000,8000,780,345]},
      {label:'March',data:[1000,4000,780,9087]},
    ]
    
  };
  chartOptions:ChartOptions={
    responsive: true,
    plugins:{
    title:{
    
      text:'Mobile Sales Data'
    },
  }
  }
}
