name_student_array=[];

function submit() {

    var name1=document.getElementById("name_1").value ;
    var name2=document.getElementById("name_2").value ;
    var name3=document.getElementById("name_3").value ;
    var name4=document.getElementById("name_4").value ;

    name_student_array.push(name1);
    name_student_array.push(name2);
    name_student_array.push(name3);
    name_student_array.push(name4);

    console.log(name_student_array);

    document.getElementById("display_name").innerHTML=name_student_array;


}