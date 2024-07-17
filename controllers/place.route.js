// controllers/excursion.route.js 
const express = require('express');
const router = express.Router();
const placeRepo = require('../utils/place.repository');

router.get('/menu', excursionMenuAction);
router.get('/', placeListAction);
router.get('/del-place/:Place_Id', placeDelAction);
router.get('/edit-place/:Place_id', placeEditAction);
router.post('/update-place/', placeUpdateAction);

// http://localhost:9000/excursion

async function excursionMenuAction(request, response) {
    
    var flashMessage = request.session.flashMessage; // express-flash ...
    request.session.flashMessage = "";
    
    response.render("index", {"flashMessage": flashMessage });
}

async function placeListAction(request, response) {
    // response.send("LIST ACTION");
    var place = await placeRepo.getAllPlaces();
    // console.log(excursion);
    var flashMessage = request.session.flashMessage; // express-flash ...
    request.session.flashMessage = "";
    
    response.render("places_list", { "place": place, "flashMessage": flashMessage });
}


async function placeEditAction(request, response) {
    // response.send("EDIT ACTION");
    var places = await placeRepo.getAllPlaces();
    //var Place_id = request.params.Place_id;
    var place = placeRepo.getBlankPlace();
    response.render("places_edit", { "onePlace": place, "place": places});
}

async function placeDelAction(request, response) {
    // response.send("DEL ACTION");
    // TODO: remove extras for car, unless the car cannot be removed!!!
    var numRows = await placeRepo.delOnePlace(request.params.Place_Id);
    request.session.flashMessage = "ROWS DELETED: "+numRows;
    response.redirect("/place");
}

async function placeUpdateAction(request, response) {
    // response.send("UPDATE ACTION");
    
    var numRows = await placeRepo.addOnePlace(
        request.body.Name_place, 
        request.body.Address, 
        request.body.City, 
        request.body.Transport, 
        request.body.Outside, 
        request.body.Image);

    request.session.flashMessage = "ROWS INSERT: "+numRows;
    response.redirect("/place");

}

module.exports = router;