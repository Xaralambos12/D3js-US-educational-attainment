var static_data = [{
  grad_year: 2013,
  student_count: 56.3
},{
  grad_year: 2014,
  student_count: 65.6
},{
  grad_year: 2015,
  student_count: 68.1
},{
  grad_year: 2016,
  student_count: 69.1
},{
  grad_year: 2017,
  student_count: 71
},
];
var tip = d3.select(".chart-container")
	.append("div")
  .attr("class", "tip")
	.style("position", "absolute")
	.style("z-index", "10")
	.style("visibility", "hidden");

var svg = d3.select("svg").attr("class", "background-style"),
    margin = {top: 20, right: 20, bottom: 42, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

var x = d3.scaleBand().rangeRound([0, width]).padding(0.05),
    y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("apiPlaceholderURL", function(error, data) {
  //if (error) throw error;

  data = static_data;
  
  x.domain(data.map(function(d) { return d.grad_year; }));
  y.domain([0, d3.max(data, function(d) { return d.student_count; })]);

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
   .append("text")
      .attr("y", 6)
      .attr("dy", "2.5em")
      .attr("dx", width/2 - margin.left)
      .attr("text-anchor", "start")
      .text("Years");

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("(%)");
 

  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.grad_year); })
      .attr("y", function(d) { return y(d.student_count); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.student_count)})
      .on("mouseover", function(d) {return tip.text(d.student_count).style("visibility", "visible").style("top", y(d.student_count) - 13+ 'px' ).style("left", x(d.grad_year) + x.bandwidth() - 12 + 'px')})
	    //.on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
	    .on("mouseout", function(){return tip.style("visibility", "hidden");});
     });
