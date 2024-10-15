function selection() {
          const selecteur = document.getElementById('choix2');
          const monChoix = selecteur[selecteur.selectedIndex];
          document.getElementById('nat').innerHTML = monChoix.text;
        }
function pizza() {
	var compteur=0
    const nsi = document.getElementById('nsi');
	const maths = document.getElementById('ma');
	const svt = document.getElementById('svt');
	var texte= ''
	if (nsi.checked==true) {
		compteur+=1
		texte=texte+'nsi'
	}
	if(maths.checked==true) {
		compteur+=1
		texte=texte+' maths'
	}
	if(svt.checked==true) {
		compteur+=1
		texte=texte+' svt'
	}
	if((compteur==3)||(compteur==1)) {
		texte=' Vous devez gardez 2 spécialités !'
	}
	
    document.getElementById('spé').innerHTML =texte;
}