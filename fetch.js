/*fetch*/
        // Dohvatanje JSON podataka o dezenima
            fetch("dezeni.json")
                .then(function (response) {
                    return response.json();
                })
                .then(function (dezeni) {
                    let dezeniContainer = document.getElementById("dezeni");
                    let html = "";

                    // Iteriranje kroz svaki dezen i generisanje HTML za svaki od njih
                    dezeni.forEach(function (dezen) {
                        html += `
        <div class="pattern">
          <img src="${dezen.image}" alt="${dezen.name}">
          <p>${dezen.name}</p>
        </div>
      `;
                    });

                    // Postavljanje generisanog HTML-a unutar odgovarajućeg kontejnera
                    dezeniContainer.innerHTML = html;
                })
                .catch(function (error) {
                    console.error("Greška pri dohvatanju podataka: " + error);
                });

        /*fetch*/