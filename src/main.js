import { Person } from './scripts';
import './styles.css';

$(document).ready(function(){
  $("button#start").click(function(event){
    let age = parseInt($("input.first").val());
    let life = parseInt($("input.second").val());
    event.preventDefault();
    const personValue = new Person(age, life);
    const earth = personValue.earthAge();
    const mercury = personValue.mercuryAge();
    const venus = personValue.venusAge();
    const mars = personValue.marsAge();
    const jupiter = personValue.jupiterAge();
    console.log(personValue);
    $("#answer").show().text(earth + ", " + mercury + ", " + venus + ", " + mars + ", " + jupiter);
  });
  $("button#restart").click(function(){
    location.reload();
  });
});
