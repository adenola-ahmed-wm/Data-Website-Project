/**
 * Created by session2 on 10/9/15.
 */
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Rappers', 'Net Worth',],
        [' Dr Dre', 810000000],
        ['P Diddy', 730000000],
        ['Jay-Z', 650000000],
        ['Russell Simons', 340000000],
        ['Master P', 250000000]
    ]);

    var options = {
        title: 'Population of Largest U.S. Cities',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Net Worth in millions',
            minValue: 0
        },
        vAxis: {
            title: 'Rappers'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}