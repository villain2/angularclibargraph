import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input } from '@angular/core';
import { BarGraphData } from '../../core/bar-graph-data';
import { BARDATA } from '../../core/bar-graph-default';
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
  circle: any;
  htmlElement: HTMLElement;
  barData     = BARDATA;
  barGraphData: BarGraphData;

  constructor(
    private elRef: ElementRef
  ) { }


  ngOnInit(){
    this.createGraph();
    //this.createDot();
  }

  createGraph = () => {
    this.hostElement  = this.d3Container.nativeElement;
    let margin = {top: 5, right: 20, bottom: 30, left: 0};
    let width  = 400 - margin.left - margin.right;
    let height = 400 - margin.top - margin.bottom;

    console.log('host element');
    console.log(this.hostElement);
    console.log('bar data');
    console.log(this.barData);

    this.svg = d3.select(this.hostElement).append('svg')
      .attr('id', 'barGraph')
      //.attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .attr('viewBox', '0,0 ' + this.hostElement.offsetWidth + ',' + this.hostElement.offsetHeight)
      .append('g')
      .attr('transform', `translate(${this.hostElement.offsetWidth / 2}, ${this.hostElement.offsetHeight / 2})`);

    let chart = this.svg.append('g')
      .attr('class', 'bar')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    let xDomain = this.barData.map(d => d.id);
    let yDomain = [0, d3.max(this.barData, d => d.answerValue)];

    //scale for data domain
    let x = d3.scaleBand()
      .domain(xDomain)
      .rangeRound([0,width])
      .padding(0.2);

    let y = d3.scaleLinear()
      .domain(yDomain)
      .range([height, 0]);

    //add the x Axis
    this.svg.append('g')
      .attr('class', 'x axis')
      .attr('width', '100%')
      .attr('transform', `translate(${margin.left},${margin.top + height - 300})`)
      .call(d3.axisBottom(x));

    this.svg.append('g')
      .attr('class', 'y axis')
      .attr('transform', `translate(${margin.left},${margin.top}`)
      .call(d3.axisLeft(y));


  }

  createDot = () => {
    this.svg.append("circle")
      .attr('cx', 10)
      .attr('cy', 10)
      .attr('r', 50);
  }

  //ngOnChange (){}



  /** references
   * https://github.com/ultrasonicsoft/d3-ng5-demo/tree/master/src/app
   * https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b
   * https://github.com/HoplaGeiss/hopla-pie-chart/blob/master/src/app/pie-chart/pie-chart.component.ts
   */

}
