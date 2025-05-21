class Aluno{
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota){
    this.primeiroNome=primeiroNome;
    this.segundoNome=segundoNome;
    this.primeiraNota=primeiraNota;
    this.segundaNota=segundaNota;
    }
    
    nomeCompleto(){
      return this.primeiroNome + " " + this.segundoNome;
    }
  
    media(){
      return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }
  
    situacao(media){
      if(media<6)
        return "Reprovado"; 
      return "Aprovado";
    }
  }
  
  const TOTAL_STUDENTS = 5;
  
  const students = new Array(TOTAL_STUDENTS);
  
  const student1 = new Aluno("Bianca", "Galdino", 10, 9);
  students[0]=student1; 
  
  var student2 = new Aluno("Runin", "Fang", 4, 3);
  students[1]=student2;
  
  var student3 = new Aluno("Kitay", "Chen", 8, 10);
  students[2]=student3;
  
  var student4 = new Aluno("Karol", "Gotto", 10, 10);
  students[3]=student4;
  
  var student5 = new Aluno("Nezha", "Yin", 6, 9);
  students[4]=student5;
  
  const showStudents = () => {
    for(i = 0; i < TOTAL_STUDENTS; i++) {
      const name = students[i].nomeCompleto();
      var average = students[i].media();
      var situation = students[i].situacao(average);
      alert("Nome Completo: " + name+"\n\nMedia: "+average+" Situacao: " + situation);
    }
  }
  
  showStudents();
