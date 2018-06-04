import { Component, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-graph-stage',
  templateUrl: './bar-graph-stage.component.html',
  styleUrls: ['./bar-graph-stage.component.css']
})
export class BarGraphStageComponent implements AfterContentInit {

  constructor() { }

  radius     = 10;

  ngAfterContentInit() {

    d3.select('p').style('color', 'red');
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
