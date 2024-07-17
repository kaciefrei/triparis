// controllers/excursion.route.js 
const express = require('express');
const router = express.Router();
const choiceRepo = require('../utils/choice.repository');
const excuRepo = require('../utils/excursion.repository');

router.get('/menu', excursionMenuAction);
router.get('/', choiceListAction);
router.get('/del-choice/:Choice_Id', choiceDelAction);
router.get('/add-choice/:Excursion_id', choiceAddAction);


// http://localhost:9000/excursion

async function excursionMenuAction(request, response) {
    
    var flashMessage = request.session.flashMessage; // express-flash ...
    request.session.flashMessage = "";
    
    response.render("index", {"flashMessage": flashMessage });
}

async function choiceDelAction(request, response) {
    // response.send("DEL ACTION");
    // TODO: remove extras for car, unless the car cannot be removed!!!
    var numRows = await choiceRepo.delOneChoice(request.params.Choice_Id);
    request.session.flashMessage = "ROWS DELETED: "+numRows;
    response.redirect("/choice");
}

async function choiceListAction(request, response) {
    // response.send("LIST ACTION");
    var choice = await choiceRepo.getAllChoices();
    var excursion = await excuRepo.getAllExcursions();
    // console.log(choice);
    var flashMessage = request.session.flashMessage; // express-flash ...
    request.session.flashMessage = "";
    
    response.render("choices_list", { "choice": choice, "excursion": excursion, "flashMessage": flashMessage });
}

async function choiceAddAction(request, response) {
    // response.send("ADD ACTION");
    // TODO: remove extras for car, unless the car cannot be removed!!!
    var numRows = await choiceRepo.addOneChoice(request.params.Excursion_id);
  
    request.session.flashMessage = "ROWS INSERT: "+numRows;
}

module.exports = router;