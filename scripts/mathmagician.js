var siya = document.getElementById('siya'),
morg = document.getElementById('morg'),
gold = document.getElementById('gold'),
solo = document.getElementById('solo'),
click = document.getElementById('click'),
jugg = document.getElementById('jugg');

siya.onkeyup = mathmagic;
$('#savegame').keyup(import_save);

$('body').on('change', '#morg_owned', morg_calc);

function mathmagic() {
	var fsiya = parseFloat(siya.value);
		
		morg_calc();
	
		result = Math.ceil(fsiya * 0.93)
		gold.value = !isNaN(result) ? result : '';
		
		if(fsiya<=693)
			result=Math.ceil(fsiya*.9);
		else
			// https://www.reddit.com/r/ClickerHeroes/comments/3823wt/mathematical_analysis_of_lategame_for_most_idle/
			result=Math.ceil(1.15*Math.pow(Math.log(3.25*Math.pow(fsiya,2)),.4)*Math.pow(fsiya,.8));
		solo.value = !isNaN(result) ? result : '';
		
		result = Math.ceil(fsiya * 0.5)
		click.value = !isNaN(result) ? result : '';
		
		result = Math.ceil(fsiya * 0.1)
		jugg.value = !isNaN(result) ? result : '';
};

// sets the proper title and calculates values dependent on the user owning Morg
function morg_calc() {
	if ($('#morg_owned').is(':checked')) {
		$('#soul_label').html('Morgulis:');
	} else {
		$('#soul_label').html('Souls banked:');
	}
	
	var fsiya = parseFloat(siya.value);
	if(fsiya<100)
		result = Math.ceil(Math.pow((fsiya+1),2));
	else
		result = Math.ceil(Math.pow((fsiya+22),2));
		
	if(!$('#morg_owned').is(':checked'))
		result=Math.ceil(result*1.1);
		
		morg.value = !isNaN(result) ? result : '';
};

function level_siya(add_levels) {
	var level = parseInt(siya.value);
	level += add_levels;
	siya.value = level;
	mathmagic();
};

function mult_siya(m) {
	var level = parseFloat(siya.value);
	level *= m;
	siya.value = Math.ceil(level);
	mathmagic();
};

const ANTI_CHEAT_CODE = "Fe12NAfA3R6z4k0z";
const SALT = "af0ik392jrmt0nsfdghy0";
function import_save() {
        var txt = $('#savegame').val();
 
        if (txt.search(ANTI_CHEAT_CODE) != -1) {
                var result = txt.split(ANTI_CHEAT_CODE);
                txt = "";
                for (var i = 0; i < result[0].length; i += 2) {
                        txt += result[0][i];
                }
                if (CryptoJS.MD5(txt + SALT) != result[1]) {
                        // alert("This is not a valid Clicker Heroes savegame!");
                        return;
                }
        }
        var data = $.parseJSON(atob(txt));
 
        // If Morgulis owned, box is checked
		$('#morg_owned').prop('checked', data.ancients.ancients.hasOwnProperty(16));
		morg_calc();

 
        if(data.ancients.ancients.hasOwnProperty(5))    {
                // has Siyalatas
                siya.value = data.ancients.ancients[5].level;
				$('#base_label').html('Siyalatas:');
                mathmagic();
        }
        else if(data.ancients.ancients.hasOwnProperty(28))      {
                // has Argaiv
                siya.value = data.ancients.ancients[28].level;
				$('#base_label').html('Argaiv:');
                mathmagic();
        }
}
