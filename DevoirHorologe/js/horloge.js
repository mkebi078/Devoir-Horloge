var d = new Date();
const smilli=1000;
const mmilli =60000;
const hmilli=3600000;

var that;
var son;
var audio;


var j={
"id":"span_horloge",
"message":"alarme active"
};


class Horloge{

	constructor(){
	that = this;
	this.id=j.id;
	this.active=j.message;
	}

	Affichage(){
	var d = new Date();
	document.getElementById(this.id).innerHTML = d.toLocaleTimeString();
	}

    Alarme(){
   	console.log(that.active);
		switch(document.getElementById("mySelect").value) {

		    case "Black dog":
		        son ='mp3/Black dog.mp3';
		        break;
		    case "Sultans Of Swing":
		        son = 'mp3/Sultans Of Swing.mp3';
		        break;
		    
		    default:
		        son ='mp3/DoorBuzzer.mp3';
		}
 	 	
		audio = new Audio(son);
        audio.play();

 	}

    tempsdeclenchement(){
 	    var a = document.getElementById("select_alarmeHeures");
 	    var h =  a.selectedIndex;
        console.log("heure:" + a.selectedIndex);

		var b = document.getElementById("select_alarmeMinutes");
		var m =  b.selectedIndex;
		console.log("minute:" + b.selectedIndex);

		var c = document.getElementById("select_alarmeSecondes");
		var s = c.selectedIndex;
		console.log("seconde:" + c.selectedIndex);

		var tdAlarme = h * hmilli + m * mmilli + s * smilli;
		console.log("l'alarme se declenchera dans " + tdAlarme + " milliseconde. ");

		return tdAlarme;
    }
	
	btnArreterAlarme(){
	var btn = document.createElement("button");
	var t = document.createTextNode("arreter une alarme");
	btn.appendChild(t);
	document.getElementById("btn_ajouterAlarme").after(btn);
	btn.id="btn_arreterAlarme";
	}
	
	AjoutHtml(){
	//mon titre
	 var titreChoix = document.createElement("h2");
	 var node = document.createTextNode("Choix de son");
	 titreChoix.appendChild(node);
	 var element = document.getElementById("alarme");
	 element.appendChild(titreChoix);

	//ma ligne
	var hr = document.createElement("HR");
	element.appendChild(hr);
	  
    //ma selection
	var x = document.createElement("SELECT");
    x.setAttribute("id", "mySelect");
	element.appendChild(x);

	 
	var z = document.createElement("option");
	z.setAttribute("value", "default");
	var t = document.createTextNode("DoorBuzzer");
	z.appendChild(t);
	document.getElementById("mySelect").appendChild(z);

	var a = document.createElement("option");
	a.setAttribute("value", "Black dog");
	var b = document.createTextNode("Black dog -Led Zeppling");
	a.appendChild(b);
	document.getElementById("mySelect").appendChild(a);

	var c = document.createElement("option");
	c.setAttribute("value", "Sultans Of Swing");
	var d = document.createTextNode("Sultans Of Swing -Dire Street");
	c.appendChild(d);
	document.getElementById("mySelect").appendChild(c);
	}

};

//mon instance de la classe Horloge
var monHorloge = new Horloge();
// Ajout de mes elements htmls
monHorloge.AjoutHtml();

//affichage de mon horloge
setInterval(function(){ monHorloge.Affichage()},0);

//click sur mon boutton
document.getElementById("btn_ajouterAlarme").addEventListener("click",function(){
   setTimeout(  monHorloge.Alarme,  monHorloge.tempsdeclenchement())
	  }
	  );

monHorloge.btnArreterAlarme();
document.getElementById("btn_arreterAlarme").addEventListener("click",function(){
 		                                                               console.log('alarme non active');
 		                                                               //that.audio.pause()
																	 audio.pause()
 		                                                                             });
