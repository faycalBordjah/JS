Number.prototype.even = function () {
  return this.valueOf() % 2 === 0;
};

String.prototype.toCapitalize = function () {
  var str = this.valueOf();
  var strArr = str.split(" ");
  for (var i = 0; i < strArr.length; i++) {
    strArr[i] =  strArr[i].charAt(0).toUpperCase() + strArr[i].substr(1);
  }
  return strArr.join(" ");
};

Date.prototype.toLocateDate = function () {
  var jour = new Array( "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
      "Dimanche");
var moi = new Array("janvier",
"février",
"mars",
"avril",
"mai",
"juin",
"juillet",
"aout",
"septembre",
"octobre",
"novembre",
"decembre");

return jour[this.getDay()] +" " +this.getDate()+" "+ moi[this.getMonth()] +" "+ this.getFullYear();
};
