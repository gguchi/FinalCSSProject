function assignGrade(score){
    var score;
    var grade;

    if(score <= 2){
        grade = 'F';
    }
    
    if(score > 2){
        grade = 'E';
    }

    if(score >= 5){
        grade = 'D';
    }
    if(score >= 7){
        grade = 'C';
    }
    if(score >= 9){
        grade = 'B';
    }
    if(score > 10){
        grade = 'A';
    }

    return grade;

    alert('$(grade)')
}