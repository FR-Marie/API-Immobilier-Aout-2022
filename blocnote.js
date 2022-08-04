app.get('/appartement/:id', (request, response)=>{
    const id = Number(request.params.id);
    const detailsAppartement = appartement.find(detailsAppartement => detailsAppartement.id === id)
    if (!detailsAppartement){
        return response.status(404), send('Aucun appartement trouvé');
    }
    response.json(detailsAppartement);
})


appartements.appartements.map((appartement)=>{
    console.log(appartement)
    //btn détails
    let btnDetailsAppartement = document.querySelector(`#detailsAppartement-${appartement.id}`);
    btnDetailsAppartement.addEventListener('click', (event)=>{
        event.preventDefault();
        afficherDetailsAppartements(appartement);
    })

})