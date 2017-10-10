var histcatexplong = [];

    d3.csv("impuestos2.csv", function(data) {
        rentaCuotas = {"key": "Renta Cuotas", "values" : []};
        retefuente = {"key": "Retefuente", "values" : []} 
        iva = {"key": "IVA", "values" : []} 
        timbreNacional = {"key": "Timbre Nacional", "values" : []} 
        gmf = {"key": "GMF", "values" : []} 
        patrimonio = {"key": "Patrimonio", "values" : []} 
        riqueza = {"key": "Riqueza", "values" : []} 
        alConsumo = {"key": "Al consumo", "values" : []} 
        gasolinaYACPM = {"key": "Gasolina y ACPM", "values" : []} 
        alCarbono = {"key": "Al carbono", "values" : []} 
        cree = {"key": "CREE", "values" : []} 
        ivaExterno = {"key": "IVA Externo", "values" : []} 
        arancel = {"key": "Arancel", "values" : []} 
        porClasificar = {"key": "Por clasificar", "values" : []} 

        data.forEach(function(d) {
        rentaCuotas.values.push([parseInt(d.year), parseFloat(d.rentaCuotas)]);
        retefuente.values.push([parseInt(d.year), parseFloat(d.retefuente)]);
        iva.values.push([parseInt(d.year), parseFloat(d.iva)]);
        timbreNacional.values.push([parseInt(d.year), parseFloat(d.timbreNacional)]);
        gmf.values.push([parseInt(d.year), parseFloat(d.gmf)]);
        patrimonio.values.push([parseInt(d.year), parseFloat(d.patrimonio)]);
        riqueza.values.push([parseInt(d.year), parseFloat(d.riqueza)]);
        alConsumo.values.push([parseInt(d.year), parseFloat(d.alConsumo)]);
        gasolinaYACPM.values.push([parseInt(d.year), parseFloat(d.gasolinaYACPM)]);
        alCarbono.values.push([parseInt(d.year), parseFloat(d.alCarbono)]);
        cree.values.push([parseInt(d.year), parseFloat(d.cree)]);
        ivaExterno.values.push([parseInt(d.year), parseFloat(d.ivaExterno)]);
        arancel.values.push([parseInt(d.year), parseFloat(d.arancel)]);
        porClasificar.values.push([parseInt(d.year), parseFloat(d.porClasificar)]);



    });
    histcatexplong.push(rentaCuotas);
    histcatexplong.push(retefuente);
    histcatexplong.push(iva);
    histcatexplong.push(timbreNacional);
    histcatexplong.push(gmf);
    histcatexplong.push(patrimonio);
    histcatexplong.push(riqueza);
    histcatexplong.push(alConsumo);
    histcatexplong.push(gasolinaYACPM);
    histcatexplong.push(alCarbono);
    histcatexplong.push(cree);
    histcatexplong.push(ivaExterno);
    histcatexplong.push(arancel);
    histcatexplong.push(porClasificar);

});




    var colors = d3.scale.category20();

    var chart2;
    nv.addGraph(function() {
        chart2 = nv.models.stackedAreaChart()
            .useInteractiveGuideline(true)
            .x(function(d) { return d[0] })
            .y(function(d) { return d[1] })
            .controlLabels({stacked: "Stacked"})
            .duration(100);

        chart2.xAxis.tickFormat(d3.format('d'));
        chart2.yAxis.tickFormat(d3.format(',.4f'));

        chart2.legend.vers('furious');

        d3.select('#chart2')
            .datum(histcatexplong)
            .transition().duration(200)
            .call(chart2)
            .each('start', function() {
                setTimeout(function() {
                    d3.selectAll('#chart2 *').each(function() {
                        if(this.__transition__)
                            this.__transition__.duration = 1;
                    })
                }, 0)
            });

        nv.utils.windowResize(chart2.update);
        return chart2;
    });

    document.addEventListener("DOMContentLoaded", function (event) {

});

    window.onload = function () {
                window.dispatchEvent(new Event('resize'));

    }

