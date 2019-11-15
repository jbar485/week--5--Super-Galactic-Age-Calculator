import { Person } from './scripts';
import './styles.css';

$(document).ready(function(){
  $("button#start").click(function(event){
    let age = parseInt($("input.first").val());
    let life = parseInt($("input.second").val());
    event.preventDefault();
    let personValue = new Person(age, life);
    let earth = personValue.earthAge();
    console.log(personValue);
    $("#answer").show().text(earth);
  });
  $("button#restart").click(function(){
    location.reload();
  });
});
