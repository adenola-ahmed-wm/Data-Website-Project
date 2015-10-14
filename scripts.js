/**
 * Created by session2 on 10/9/15.
 */
alert("Hello");
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

google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic2);

function drawBasic2() {

    var data = google.visualization.arrayToDataTable([
        ['Singers', 'Net Worth'],
        ['Herp Alpert', 850000000],
        ['Madonna', 800000000],
        ['Celine Dion', 630000000],
        ['Mariah Carey', 520000000],
        ['Dolly Parton', 500000000]
    ]);

    var options = {
        title: 'Top 5 Singers Net Worth',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Net Worth in Millions',
            minValue: 0
        },
        vAxis: {
            title: 'Singers'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));

    chart.draw(data, options);
}