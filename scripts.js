/**
 * Created by session2 on 10/9/15.
 */
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Rappers', 'Net Worth', {role: 'style'}],
        [' Dr Dre', 810000000, 'color: black'],
        ['P Diddy', 730000000, 'color: silver'],
        ['Jay-Z', 650000000, 'color:blue'],
        ['Russell Simons', 340000000, 'color:gold'],
        ['Master P', 250000000, 'color: green']
    ]);

    var options = {
        title: 'Top 5 Rappers Net Worths',
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