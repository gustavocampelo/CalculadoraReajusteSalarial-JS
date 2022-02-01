function calcular(){
    var sal = parseInt(prompt('Digite um número'));

    if(sal<=280){
        sal1 = sal*0.2;
        salf = sal1+sal;

        alert(`O salário antigo valia ${sal} reais, obteve um reajuste de 20% e aumentou para ${salf} reais.`);
    }
    else if (sal>280 & sal<=700){
        sal1 = sal*0.15;
        salf = sal1+sal;
        alert(`O salário antigo valia ${sal} reais, obteve um reajuste de 15% e aumentou para ${salf} reais.`);
    }
    else if (sal>700 & sal<=1500){
        sal1 = sal*0.1;
        salf = sal1+sal;
        alert(`O salário antigo valia ${sal} reais, obteve um reajuste de 10% e aumentou para ${salf} reais.`);
    }
    else if (sal>1500){
        sal1 = sal*0.05;
        salf = sal1+sal;
        alert(`O salário antigo valia ${sal} reais, obteve um reajuste de 50% e aumentou para ${salf} reais.`);
    }

 
}