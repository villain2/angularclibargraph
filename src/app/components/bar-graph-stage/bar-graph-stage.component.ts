import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-graph-stage',
  templateUrl: './bar-graph-stage.component.html',
  styleUrls: ['./bar-graph-stage.component.css']
})
export class BarGraphStageComponent implements OnInit {
  @ViewChild('containerD3') d3Container: ElementRef;

  hostElement: any;
  svg: any;
  htmlElement: HTMLElement;

  constructor(
    private elRef: ElementRef
  ) { }


  ngOnInit(){
    this.createGraph();
  }

  createGraph = () => {
    this.hostElement  = this.d3Container.nativeElement;
    console.log('host element');
    console.log(this.hostElement);

    this.svg = d3.select(this.hostElement).append('svg')
      .attr('viewBox', '0,0 ' + this.hostElement.offsetWidth + ',' + this.hostElement.offsetHeight)
      .append('g')
      .attr('transform', `translate(${this.hostElement.offsetWidth / 2}, ${this.hostElement.offsetHeight / 2})`);

  }
  //ngOnChange (){}



  /** references
   * https://github.com/ultrasonicsoft/d3-ng5-demo/tree/master/src/app
   * https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b
   * https://github.com/HoplaGeiss/hopla-pie-chart/blob/master/src/app/pie-chart/pie-chart.component.ts
   */

}
