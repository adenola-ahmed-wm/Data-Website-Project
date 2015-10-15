/**
 * Created by session2 on 10/9/15.
 */
alert("Hello");
var page = prompt("Are you ready to view the page");
if(page == "yes")
alert("Let's go.");
else
alert("Oh well here's the page anyway.");
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
        ['Singers', 'Net Worth', {role: 'style'}],
        ['Herp Alpert', 850000000, 'color: pink' ],
        ['Madonna', 800000000, 'color: #BEF781'],
        ['Celine Dion', 630000000, 'color: goldenrod'],
        ['Mariah Carey', 520000000, 'color: yellow'],
        ['Dolly Parton', 500000000, 'color: darkblue']
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