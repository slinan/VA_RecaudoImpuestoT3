var histcatexplong = [];

    d3.csv("/data/impuestos.csv", function(data) {
        actividadInterna = {"key": "Actividad interna", "values" : []};
        renta = {"key": "Renta", "values" : []} 
        iva = {"key": "IVA", "values" : []} 
        timbre = {"key": "Timbre", "values" : []} 
        gmf = {"key": "GMF", "values" : []} 
        actividadExterna = {"key": "Actividad externa", "values" : []} 

        data.forEach(function(d) {
        actividadInterna.values.push([parseInt(d.year), parseFloat(d.actividadInterna)]);
        renta.values.push([parseInt(d.year), parseFloat(d.renta)]);
        iva.values.push([parseInt(d.year), parseFloat(d.iva)]);
        timbre.values.push([parseInt(d.year), parseFloat(d.timbre)]);
        gmf.values.push([parseInt(d.year), parseFloat(d.gmf)]);
        actividadExterna.values.push([parseInt(d.year), parseFloat(d.actividadExterna)]);

    });
    histcatexplong.push(actividadInterna);
    histcatexplong.push(renta);
    histcatexplong.push(iva);
    histcatexplong.push(timbre);
    histcatexplong.push(gmf);
    histcatexplong.push(actividadExterna);

});
    




    var colors = d3.scale.category20();

    var chart;
    nv.addGraph(function() {
        chart = nv.models.stackedAreaChart()
            .useInteractiveGuideline(true)
            .x(function(d) { return d[0] })
            .y(function(d) { return d[1] })
            .controlLabels({stacked: "Stacked"})
            .duration(300);

        chart.xAxis.tickFormat(d3.format('d'));
        chart.yAxis.tickFormat(d3.format(',.4f'));

        chart.legend.vers('furious');

        d3.select('#chart1')
            .datum(histcatexplong)
            .transition().duration(1000)
            .call(chart)
            .each('start', function() {
                setTimeout(function() {
                    d3.selectAll('#chart1 *').each(function() {
                        if(this.__transition__)
                            this.__transition__.duration = 1;
                    })
                }, 0)
            });

        nv.utils.windowResize(chart.update);
        return chart;
    });
