function calculate() {
    var party_a = parseFloat(document.getElementById("party1").value);
    var party_b = parseFloat(document.getElementById("party2").value);
    var party_c = parseFloat(document.getElementById("party3").value);
    var party_d = parseFloat(document.getElementById("party4").value);
    var party_e = parseFloat(document.getElementById("party5").value);

    var party_votes = {
        "Party A": party_a,
        "Party B": party_b,
        "Party C": party_c,
        "Party D": party_d,
        "Party E": party_e
    };

    var num_seats = 28; // bu değeri değiştirebilirsiniz

    var results = "<h2>Seat Allocation</h2><ul>";
    var seats = dhondt_system(num_seats, party_votes);
    for (var party in seats) {
        results += "<li>" + party + ": " + seats[party] + " seat(s)</li>";
    }
    results += "</ul>";

    document.getElementById("result").innerHTML = results;
}
