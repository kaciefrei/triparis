-- (Il faut d'abord créer la place, puis après créer l'excursion avec l'id de la place créé juste avant)
-- Insert place :

insert into place values ('1000', 'Opéra', 'place de l Opéra, Paris 9e', 'Paris', 'métro 7', 1, "https://upload.wikimedia.org/wikipedia/commons/1/1c/Avenue_de_l%27Op%C3%A9ra_Paris.jpg");

insert into place values('2000','Moulin Rouge','82 Bd de Clichy','Paris','métro 2',1, "http://www.alaclochedor.com/blog/wp-content/uploads/2017/05/boulevard-clichy.gif") ;
insert into place values('2001','Seine','Port de la Bourdonnais','Paris','métro 14',1, "https://www.bateauxparisiens.com/upload/photos/5947/t9.jpg") ;
insert into place values('2002','Disneyland Paris','Bd de Parc, Chessy','Chessy','Rer A',1, "https://picdespak.com/TO_Parc/BILLETTERIE/12_DISNEYLAND__PARIS/SITE//N024483_20190411111730146.jpg") ;
insert into place values('2003','AquaBoulevard','4 rue Louis Armand','Paris','métro 12',0, "https://www.pagesjaunes.fr/media/ugc/aquaboulevard_de_paris_07505600_132243307?w=400&h=300") ;
insert into place values('2004','Eiffel Tower','Champ de mars','Paris','metro 9',0, "https://d1vp8nomjxwyf1.cloudfront.net/wp-content/uploads/sites/282/2017/11/27130401/CHAMP-DE-MARS.jpg");
insert into place values('2005','Trocadero Garden','5 av Albert de Mun','Paris','métro 6',1, "https://www.discoverwalks.com/blog/wp-content/uploads/2018/06/thingstodoaroundtrocadero.jpg") ;
insert into place values('2006','The Manor of Paris','18 Rue du Paradis','Paris','métro 4',0, "https://www.pagesjaunes.fr/media/ugc/le_manoir_de_paris_07505600_114217893");
insert into place values('2007','Galerie Lafayette','40 bd Haussmann','Paris','métro 7',1, "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Galeries_Lafayette_Haussmann_1.jpg/1200px-Galeries_Lafayette_Haussmann_1.jpg");
insert into place values('2008','FlyView','30 Rue du 4 septembre','Paris','métro 14',0, "https://i0.wp.com/www.zickma.fr/wp-content/uploads/2022/09/on-a-teste-fly-view-paris-on-se-sent-un-peu-james-bond-01.jpeg?resize=678%2C509");

insert into place values('300','Louvre Museum','Rue de Rivoli','Paris','métro 1',0, "https://api-www.louvre.fr/sites/default/files/2021-02/cour-napoleon-et-pyramide.jpg");
insert into place values('3001','Orsay Museum','1 Rue de la Légion d’Honneur','Paris','métro 12', 0, "https://i.pinimg.com/originals/03/a3/ca/03a3ca34c078f2e488d12ffa0cfa924f.jpg") ;
insert into place values('3002','Orangerie Museum','Jardins Tuileries','Paris','métro 1', 0, "https://www.jardinsjardin.com/wp-content/uploads/2021/03/Jardins-des-Tuileries-min.jpg");
insert into place values('3003','Triumphal arc','Place Charles de Gaulle','Paris','métro 6', 1, "https://www.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_77884/node_77889/place-charles-de-gaulle-arc-de-triomphe-avec-touristes-%7C-630x405-%7C-%C2%A9-paris-tourist-office-photographe-daniel-thierry/15661363-1-fre-FR/Place-Charles-de-Gaulle-Arc-de-Triomphe-avec-touristes-%7C-630x405-%7C-%C2%A9-Paris-Tourist-Office-Photographe-Daniel-Thierry.jpg");
insert into place values('3004','Notre-Dame','6 Parvis Notre-Dame','Paris','métro 4', 0, "https://cdn.paris.fr/paris/2022/06/23/huge-86964008a0034886933ab730e5adb936.jpg");
insert into place values('3005','Pantheon','Place du Panthéon','Paris','métro 10', 0, "https://cdn.paris.fr/paris/2020/05/07/huge-c64b1dc7e6894177e199d62091ddce60.jpg") ;
insert into place values('3006','Pompidou Center','Place Geroges-Pompidou','Paris','métro 11', 0, "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/P1290305_Paris_IV_place_Georges-Pompidou_rwk.jpg/464px-P1290305_Paris_IV_place_Georges-Pompidou_rwk.jpg");
insert into place values('3007','Versailles Castle','Place d’Armes','Versailles','RER C', 0, "https://media-cdn.tripadvisor.com/media/photo-s/16/6a/6b/eb/caption.jpg");
insert into place values('3008','Garnier Palace','Place de l’Opéra','Paris','métro 7', 0) ;

-- -- Insert excursion :

insert into excursion values ('0001', 'Walk on the main boulevards', 'Walk', '3','1000', 'https://thumbs.dreamstime.com/b/balade-de-touristes-champs-elysees-%C3%A0-paris-46031939.jpg');

insert into excursion values('0010','Moulin Rouge cabaret show','Activity','2','2000', 'https://paristickets.tours/wp-content/uploads/2022/09/moulin-rouge-5.jpg') ;
insert into excursion values('0011','Cruise on the Seine','Activity','1','2001', 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/kggjcz4ux6mrisbc57ad/ParisCityTourandSeineRiverCruise.jpg');
insert into excursion values('0012','Amusement park Disney','Activity','8','2002', 'https://www.francetourisme.fr/media/Disneyland/disneyland_01.jpg');
insert into excursion values('0013','Water park AquaBoulevard','Activity','5','2003', 'https://en.parisinfo.com/var/otcp/sites/images/media/1.-photos/80.-photos-sugar/lieux-de-loisirs-et-de-culture/aquaboulevard-de-paris-1-630x405-c-otcp-dr/5050129-1-fre-FR/Aquaboulevard-de-Paris-1-630x405-C-OTCP-DR.jpg');
insert into excursion values('0014','Ice skating in the first floor of the Eiffel Tower','Activity','2','2004', 'https://www.toureiffel.paris/sites/default/files/actualite/image_principale/Patinoire_tour_Eiffel_2015-2016__E.Livinec-SETE_web_0.jpg');
insert into excursion values('0015','Paris aquarium', 'Activity','2','2005', 'https://youimg1.tripcdn.com/target/100e1f000001gt1jq2B3D.jpg?proc=source%2Ftrip');
insert into excursion values('0016','Horror activity at The Manor of Paris','Activity','1','2006', 'https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2021/02/jgnvbhgftr54.jpg');
insert into excursion values('0017','Shopping at Galerie Lafayette','Activity','4','2007', 'https://www.lsa-conso.fr/mediatheque/6/0/8/000531806_896x598_c.jpg');
insert into excursion values('0018','Flying over Paris with VR','Activity','1','2008', 'https://pariswebservices.com/wp-content/uploads/2019/09/Flyview-2.jpg');

insert into excursion values('0020', 'Visit Louvre Museum','Visit','4','300', 'https://media.cntraveler.com/photos/57d961ce3e6b32bf25f5ad0f/16:9/w_2560,c_limit/most-beautiful-paris-louvre-GettyImages-536267205.jpg');
insert into excursion values('0021','Visit Orsay Museum' ,'Visit','2','3001', 'https://www.transilien.com/sites/transilien/files/styles/manual_crop/public/2021-12/Mus%C3%A9e%20d%27Orsay.jpg?h=f87dcf60&itok=38D2pZhA') ;
insert into excursion values ('0022','Visit Orangerie Museum','Visit','1','3002', 'https://cdn-imgix.headout.com/tour/14615/TOUR-IMAGE/a27237b7-18f1-4bce-b2f2-a1344eaddbc9-8002-paris-priority-access-to-musee-de-lorangerie-01.jpg?w=504&h=315&auto=compress%2Cformat&crop=faces&fit=min');
insert into excursion values('0023', 'Visit The Eiffel Tower','Visit','3','2004', 'https://cdn-imgix.headout.com/mircobrands-content/image/68455ba8de9513c023b1a31f726bbadb-eiffel%20tower%20esplanade%20ground.jpg?auto=compress%2Cformat&w=1200&h=450&q=75&crop=faces&fm=webp');
insert into excursion values('0024', 'Visit the top of the Triumphal arc','Visit','1','3003', 'https://media.cntraveler.com/photos/5a93281d8087c02669a7dc07/16:9/w_2560,c_limit/Arc%20de%20Triomphe_GettyImages-615063063.jpg');
insert into excursion values('0025','Visit of the Cathedral Notre-Dame','Visit','1','3004', 'https://www.discoverwalks.com/blog/wp-content/uploads/2018/10/thebestwaytovisitnotredamedeparis2.jpg');
insert into excursion values('0026','Visit of the Pantheon','Visit','1','3005', 'https://www.agoda.com/wp-content/uploads/2019/01/Paris-Pantheon-architecture.jpg');
insert into excursion values('0027','Visit of the Pompidou National center of art','Visit','2','3006', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF8br76UmWw1Rl8TJ1hlWo9ewafupCxmiLkQ&usqp=CAU');
insert into excursion values('0028','Visit of the Versailles Castle','Visit','3','3007', 'https://www.headout.com/blog/wp-content/uploads/2020/03/v1.jpg');
insert into excursion values('0029','Visit of the Garnier Opera','Visit', '2', '3008', 'https://www.nerienlouper.paris/wp-content/uploads/2017/03/palais-opera-garnier.jpg');


-- Insert visitor :

insert into users values(NULL, now(), 'kaci','kaci@gmail.com','ADMIN',sha2(concat(now(), 'kaci1234'), 224));

-- Insert choice :

insert into choice values(10,1);
insert into choice values(11,NULL);

-- Insert today :

-- Insert plan :