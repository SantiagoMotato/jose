
document.getElementById("votingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const selectedCandidate = formData.get("candidato");

  if (selectedCandidate) {
    let candidato1Votes = parseInt(localStorage.getItem("candidato1Votes")) || 0;
    let candidato2Votes = parseInt(localStorage.getItem("candidato2Votes")) || 0;
    let candidato3Votes = parseInt(localStorage.getItem("candidato3Votes")) || 0;
    let votosEnBlanco = parseInt(localStorage.getItem("votosEnBlanco")) || 0;

    if (selectedCandidate === "1") {
      candidato1Votes++;
    } else if (selectedCandidate === "2") {
      candidato2Votes++;
    } else if (selectedCandidate === "3") {
      candidato3Votes++;
    } else if (selectedCandidate === "0") {
      votosEnBlanco++;
    }

    localStorage.setItem("candidato1Votes", candidato1Votes);
    localStorage.setItem("candidato2Votes", candidato2Votes);
    localStorage.setItem("candidato3Votes", candidato3Votes);
    localStorage.setItem("votosEnBlanco", votosEnBlanco);

    document.getElementById("candidato1Votes").textContent = candidato1Votes;
    document.getElementById("candidato2Votes").textContent = candidato2Votes;
    document.getElementById("candidato3Votes").textContent = candidato3Votes;
    document.getElementById("votosEnBlanco").textContent = votosEnBlanco;

    const candidatos = [
      { id: "1", votes: candidato1Votes },
      { id: "2", votes: candidato2Votes },
      { id: "3", votes: candidato3Votes },
    ];

    candidatos.sort((a, b) => b.votes - a.votes);

    const ganadorId = candidatos[0].id;
    const ganadorVotes = candidatos[0].votes;

    const ganadorElement = document.getElementById("ganador");

    if (ganadorVotes === 0) {
      ganadorElement.textContent = "Sin resultados";
    } else if (ganadorId === "0") {
      ganadorElement.textContent = "Votos en blanco";
    } else {
      ganadorElement.textContent = "Candidato " + ganadorId;
    }
  } else {
    alert("Por favor, vote por un candidato o vote en blanco.");
  }
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("candidato1Votes").textContent = localStorage.getItem("candidato1Votes") || 0;
  document.getElementById("candidato2Votes").textContent = localStorage.getItem("candidato2Votes") || 0;
  document.getElementById("candidato3Votes").textContent = localStorage.getItem("candidato3Votes") || 0;
  document.getElementById("votosEnBlanco").textContent = localStorage.getItem("votosEnBlanco") || 0;
});
