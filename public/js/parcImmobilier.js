//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////APPARTEMENTS//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//charger l'html avant le js
document.addEventListener('DOMContentLoaded', ()=>{
    //alert('page ok')
    const appartements = document.querySelector('#appartsContainer');


    fetch('http://localhost:3000/parcImmobilier', {
        method: 'GET',
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type' : 'application/json'
        },
    })

        .then(response =>response.json())
        .then(appartements => appartements.appartements.map(afficherAppartements))
        .catch(error => console.log('Erreur!' + error))


    function afficherAppartements(appartementsData) {
        const appartsContainer = document.createElement('div');
        appartsContainer.className = 'col-lg-3 col sm-12'
            appartsContainer.innerHTML =
            `
            <div class="card h-100">
            
            <img class="card-img-top img-fluid" src="${appartementsData.Photo}" >
            <h3 class="card-title text-center">${appartementsData.Type} à ${appartementsData.Localisation}</h3>
            
            <div class="card-body bg-dark h-100">
            <div class="row">
                <div class="col-8">
                    <div class="card-text"><strong id="strongAdds">Superficie:</strong>${appartementsData.SurfaceInterieure}m²</div>
                    <div class="card-text"><strong id="strongAdds">Prix:</strong>${appartementsData.Prix}€</div>
                </div>
                <div class="col-4">
                    <button id="detailsAppartement-${appartementsData.id}" class="btn btn-sm btn-outline-danger">Voir plus</button>
                </div>
            </div>
                
            </div>
            
            <div class="card-footer">
                <div class="card-text"><strong id="strongAdds">Agence:</strong><br>${appartementsData.AdresseContact}</div>
                <div class="card-text"><strong id="strongAdds">Téléphone:</strong><br>${appartementsData.TelephoneContact}</div>
            </div>
            
            </div>
            </div>
            `
        //les appartements s'affichent dans le container appartements
        appartements.appendChild(appartsContainer);
        //console.log(appartementsData)
    }



    appartements.appartements.map((appartement)=>{
        console.log(appartement)
        //btn détails
        let btnDetailsAppartement = document.querySelector(`#detailsAppartement-${appartement.id}`);
        btnDetailsAppartement.addEventListener('click', (event)=>{
            event.preventDefault();
            afficherDetailsAppartements(appartement);
        })

    })

    function afficherDetailsAppartements(appartement) {
        let detailsParent = document.getElementById('detailsAppartements');
        let detailsEnfant = document.createElement('div');
        detailsEnfant.className = 'container mt-5 p-2 bg-warning animate__animated animate__backInLeft'
        let appartementsDIV = document.getElementById('appartementsDIV')
        let maisonsDIV = document.getElementById('maisonsDIV')
        appartementsDIV.style.display = 'none'
        maisonsDIV.style.display= 'none'

        detailsEnfant.innerHTML =
            `
            <div class="card h-100 bg-info">
            
            <img class="card-img-top img-fluid" src="${appartement.Photo}" >
            <h3 class="card-title text-center">${appartement.Type} à ${appartement.Localisation}</h3>
            
            <div class="card-body bg-dark h-100">
            <div class="row">
                <div class="col-8">
                    <div class="card-text"><strong id="strongAdds">Superficie:</strong>${appartement.SurfaceInterieure}m²</div>
                    <div class="card-text"><strong id="strongAdds">Prix:</strong>${appartement.Prix}€</div>
                </div>
                <div class="col-4">
                    <button id="detailsAppartement" class="btn btn-sm btn-outline-danger">Voir plus</button>
                </div>
            </div>
                
            </div>
            
            <div id="btnRetour"></div>
            
            <div class="card-footer">
                <div class="card-text"><strong id="strongAdds">Agence:</strong><br>${appartement.AdresseContact}</div>
                <div class="card-text"><strong id="strongAdds">Téléphone:</strong><br>${appartement.TelephoneContact}</div>
            </div>
            
            </div>
            </div>
            `
        detailsParent.append(detailsEnfant);
        document.getElementById('btnRetour').addEventListener(("click", ()=>{
            setTimeout(()=>{
                window.location.reload();
            }, 5000)
        }))
    }




})


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////MAISONS////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//charger l'html avant le js
document.addEventListener('DOMContentLoaded', ()=>{
    //alert('page ok')
    const maisons = document.querySelector('#maisonsContainer');


    fetch('http://localhost:3000/parcImmobilier', {
        method: 'GET',
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type' : 'application/json'
        },
    })

        .then(response =>response.json())
        .then(maisons => maisons.maisons.map(afficherMaisons))
        .catch(error => console.log('Erreur!' + error))


    function afficherMaisons(maisonsData) {
        const maisonsContainer = document.createElement('div');
        maisonsContainer.className = 'col-lg-3 col sm-12'
        maisonsContainer.innerHTML =
            `
            <div class="card h-100">
            
            <img class="card-img-top img-fluid" src="${maisonsData.Photo}" >
            <h3 class="card-title text-center">${maisonsData.Type} à ${maisonsData.Localisation}</h3>
            
            <div class="card-body bg-dark h-100">
            <div class="row">
                <div class="col-8">
                    <div class="card-text"><strong id="strongAdds">Superficie:</strong>${maisonsData.SurfaceInterieure}m²</div>
                    <div class="card-text"><strong id="strongAdds">Prix:</strong>${maisonsData.Prix}€</div>
                </div>
                <div class="col-4">
                    <a href="#" class="btn btn-sm btn-outline-danger">Voir plus</a>
                </div>
            </div>
                
            </div>
            
            <div class="card-footer">
                <div class="card-text"><strong id="strongAdds">Agence:</strong><br>${maisonsData.AdresseContact}</div>
                <div class="card-text"><strong id="strongAdds">Téléphone:</strong><br>${maisonsData.TelephoneContact}</div>
            </div>
            
            </div>
            </div>
            `
        maisons.appendChild(maisonsContainer);
    }

})


