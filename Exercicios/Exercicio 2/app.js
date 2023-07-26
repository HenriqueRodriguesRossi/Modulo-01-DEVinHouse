let arrayPassadoPeloUsuario = Array(5).fill().map(() => window.prompt("Digite um número: "));

const procuraMinMax = element => {
    const distinctNumbers = new Set(element)
    if (!element) {
        console.log("Não foi possível verificar os números!")
    } else if (element == null) {
        console.log("Não foi possível verificar os números!")
    } else if (distinctNumbers.size === 1) {
        console.log("Não foi possível verificar os números!")
    } else {
        const menorNumero = Math.min(...element);
        const maiorNumero = Math.max(...element);

        console.log("O maior número desse array é: " + maiorNumero)

        console.log("O menor número desse array é: " + menorNumero)
    }
}

const array1 = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]
console.log("O primeiro Array a ser analisado é:" + array1)
procuraMinMax(array1)
console.log("------------------------------------------------")

const array2 = []
console.log("O segundo array a ser analisado é: " + array2)
procuraMinMax(array2)
console.log("------------------------------------------------")

const array3 = [1]
console.log("O terceiro array a ser analisado é: " + array3)
procuraMinMax(array3)
console.log("------------------------------------------------")

const array4 = [1, -1]
console.log("O quarto array a ser analisado é: " + array4)
procuraMinMax(array4)
console.log("------------------------------------------------")

const array5 = [null]
console.log("O quinto array a ser analisado é: " + array5)
procuraMinMax(array5)
console.log("------------------------------------------------")

const array6 = [-2,-2,-2,-2]
console.log("O sexto array a ser analisado é: " + array6)
procuraMinMax(array6)
console.log("------------------------------------------------")

const array7 = [20,10, 30]
console.log("O sétimo array a ser analisado é: " + array7)
procuraMinMax(array7)
console.log("------------------------------------------------")

console.log("Agora foi analisado o array passado pelo usuário: " + arrayPassadoPeloUsuario)
procuraMinMax(arrayPassadoPeloUsuario)


/*Notas do desenvolvedor: 
    Porque resolvi dessa forma: O conteúdo da linha 5 confesso que peguei do chatGPT, inclusive, segue a explicação fornecida pelo mesmo para essa funcionalidade: 
    
    A expressão new Set(numeros) cria um novo objeto Set a partir do array numeros.

    Um objeto Set é uma coleção de valores únicos, o que significa que ele permite armazenar valores sem repetição. Ao passar o array numeros como argumento para o construtor Set, o objeto Set é preenchido apenas com os valores únicos presentes no array.
    
    Porque usei o Math.min/Math.max: Fui pesquisar na internet formas de pegar o maior e o menor número dentro de um array, achei algumas possíveis soluções para essa situação mas, na maioria das fontes que consultei, indicavam a resolução dessa forma. Também utilizei o spread operator pois percebi que não teria como usar os métodos do Math sem utilizar o spread (eu juro que tentei kkk)

    Bom, não sei se fiz da melhor forma possível, mas dei o meu melhor, isso é o que importa.

    Um beijo, um abraço e ótimos códigos para nós
*/