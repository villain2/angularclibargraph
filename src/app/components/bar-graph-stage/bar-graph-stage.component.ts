import { Component, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-graph-stage',
  templateUrl: './bar-graph-stage.component.html',
  styleUrls: ['./bar-graph-stage.component.css']
})
export class BarGraphStageComponent implements AfterContentInit {

  constructor() { }

  radius:   number;
  data:any  = [];
  margin:any  = [];
  width: any;
  height: any;
  xScale: any;
  yScale: any;
  xAxis: any;
  yAxis: any;
  svgContainer: any;

  public radius      = 10;

  public data  = [
    {'color': 'mixed', 'number': 9},
    {'color': 'white', 'number': 2},
    {'color': 'black', 'number': 3},
    {'color': 'other', 'number': 6}
  ];



  margin  = {top: 10, right: 10, bottom: 90, left: 10}
  width   = 960 - this.margin.left - this.margin.right;
  height  = 500 - this.margin.top - this.margin.bottom;
  xScale  = d3.scaleBand().rangeRound([0, this.width]).padding(0.03);
  yScale  = d3.scaleLinear().range([this.height, 0]);
  xAxis   = d3.axisBottom(this.xScale);
  yAxis   = d3.axisLeft(this.yScale);


  ngAfterContentInit(){

    d3.select('p').style('color', 'red');


    this.svgContainer = d3.select('.mySvg').append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g').attr('class', 'container')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    this.xScale.domain(this.data.map(function(d) { return d.color; }));
    this.yScale.domain([0, d3.max(this.data, function(d) { return d.number; })]);

    console.log('this x scale');
    console.log(this.xScale);

    this.svgContainer.selectAll('.bar')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', function(d){ return this.xScale(d.color); })
      .attr('width', this.xScale.rangeBand())
      .attr('y', function(d){ return this.yScale(d.number);})
      .attr('height', function (d){ return this.height - this.yScale(d.number);});
  }

  clicked(event: any) {
    d3.select(event.target).append('circle')
        .attr('cx', event.x)
        .attr('cy', event.y)
        .attr('r', () => {
          return this.radius;
        })
        .attr('fill', 'red');
  }

  /** references
   * https://github.com/ultrasonicsoft/d3-ng5-demo/tree/master/src/app
   * https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b
   */

}
