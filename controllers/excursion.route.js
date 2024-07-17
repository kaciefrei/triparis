// controllers/excursion.route.js 
const express = require('express');
const router = express.Router();
const excuRepo = require('../utils/excursion.repository');
const placeRepo = require('../utils/place.repository');

router.get('/', excursionRootAction);
router.get('/menu', excursionMenuAction);
router.get('/list', excursionListAction);
router.get('/visit', visitListAction);
router.get('/walk', walkListAction);
router.get('/activity', activityListAction);
router.get('/choice', choiceListAction);
router.get('/show/:Excursion_Id', excursionShowAction);
router.get('/del/:Excursion_Id', excursionDelAction);
router.get('/del-choice/:Choice_Id', choiceDelAction);
router.get('/edit-excursion/:Excursion_Id', excursionEditAction);
router.post('/update-excursion/:Excursion_Id', excursionUpdateAction);
router.get('/add-choice/:Excursion_id', choiceAddAction);
router.get('/edit-user/:user_id', userEditAction);
router.post('/update-user/', userUpdateAction);

// http://localhost:9000/excursion
function excursionRootAction(request, response) {
    //response.send("ROOT ACTION");
    response.redirect("/excursion/menu");
}

async function excursionMenuAction(request, response) {
    
    var flashMessage = request.session.flashMessage; // express-flash ...
    request.session.flashMessage = "";
    
    response.render("index", {"flashMessage": flashMessage });
}

async function excursionListAction(request, response) {
    // response.send("LIST ACTION");
    var excursion = await excuRepo.getAllExcursions();
    // console.log(excursion);
    var flashMessage = request.session.flashMessage; // express-flash ...
    request.session.flashMessage = "";
    
    response.render("excursions_list", { "excursion": excursion, "flashMessage": flashMessage });
}

async function visitListAction(request, response) {
    // response.send("LIST ACTION");
    var excursion = await excuRepo.getAllVisits();
    // console.log(excursion);
    var flashMessage = request.session.flashMessage; // express-flash ...
    request.session.flashMessage = "";
    
    response.render("visits_list", { "excursion": excursion, "flashMessage": flashMessage });
}

async function walkListAction(request, response) {
    // response.send("LIST ACTION");
    var excursion = await excuRepo.getAllWalks();
    // console.log(excursion);
    var flashMessage = request.session.flashMessage; // express-flash ...
    request.session.flashMessage = "";
    
    response.render("walks_list", { "excursion": excursion, "flashMessage": flashMessage });
}

async function activityListAction(request, response) {
    // response.send("LIST ACTION");
    var excursion = await excuRepo.getAllActivities();
    // console.log(excursion);
    var flashMessage = request.session.flashMessage; // express-flash ...
    request.session.flashMessage = "";
    
    response.render("activities_list", { "excursion": excursion, "flashMessage": flashMessage });
}

async function excursionShowAction(request, response) {
    // response.send("SHOW ACTION");
    var oneExcursion = await excuRepo.getOneExcursion(request.params.Excursion_id);
    response.render("excursions_show", { "oneExcursion": oneExcursion });
}
async function excursionEditAction(request, response) {
    // response.send("EDIT ACTION");
    var name = await excuRepo.getAllName();
    var place = await placeRepo.getAllPlaces();
    var excursions = await excuRepo.getAllExcursions();
    var Excursion_Id = request.params.Excursion_Id;
    if (Excursion_Id!=="0")
        var excursion = await excuRepo.getOneExcursion(Excursion_Id);
    else
        var excursion = excuRepo.getBlankExcursion();
    response.render("excursions_edit", { "oneExcursion": excursion, "name":name, "place":place, "excursion": excursions });
}


async function excursionDelAction(request, response) {
    // response.send("DEL ACTION");
    // TODO: remove extras for car, unless the car cannot be removed!!!
    var numRows = await excuRepo.delOneExcursion(request.params.Excursion_Id);
    request.session.flashMessage = "ROWS DELETED: "+numRows;
    response.redirect("/excursion/menu");
}


async function choiceDelAction(request, response) {
    // response.send("DEL ACTION");
    // TODO: remove extras for car, unless the car cannot be removed!!!
    var numRows = await excuRepo.delOneChoice(request.params.Choice_Id);
    request.session.flashMessage = "ROWS DELETED: "+numRows;
    response.redirect("/excursion/choice");
}

async function excursionUpdateAction(request, response) {
    // response.send("UPDATE ACTION");
    var Excursion_Id = request.params.Excursion_Id;
    if (Excursion_Id==="0") Excursion_Id = await excuRepo.addOneExcursion(request.body.Place);

    var numRows = await excuRepo.editOneExcursion(Excursion_Id, 
        request.body.Name, 
        request.body.Type, 
        request.body.Duration_time, 
        request.body.Place, 
        request.body.Image);

    request.session.flashMessage = "ROWS UPDATED: "+numRows;
    response.redirect("/excursion/menu");
}


async function choiceListAction(request, response) {
    // response.send("LIST ACTION");
    var choice = await excuRepo.getAllChoices();
    var excursion = await excuRepo.getAllExcursions();
    // console.log(choice);
    var flashMessage = request.session.flashMessage; // express-flash ...
    request.session.flashMessage = "";
    
    response.render("choices_list", { "choice": choice, "excursion": excursion, "flashMessage": flashMessage });
}


async function choiceAddAction(request, response) {
    // response.send("ADD ACTION");
    // TODO: remove extras for car, unless the car cannot be removed!!!
    var numRows = await excuRepo.addOneChoice(request.params.Excursion_id);
  
    request.session.flashMessage = "ROWS INSERT: "+numRows;
}

async function userEditAction(request, response) {
    // response.send("EDIT ACTION");
    var users = await excuRepo.getAllUser();
    var user_Id = request.params.user_id;
    var user = excuRepo.getBlankUser();
    response.render("users_edit", { "oneUser": user, "user":users});
  
}

  async function userUpdateAction(request, response) {
    // response.send("ADD ACTION");
    // TODO: remove extras for car, unless the car cannot be removed!!!
    var numRows = await excuRepo.addOneUser(request.body.user_name, 
      request.body.user_email, 
      request.body.user_role,
      request.body.user_pass);
  
    request.session.flashMessage = "ROWS INSERT: "+numRows;
    response.redirect("/auth");
}

module.exports = router;