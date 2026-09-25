let consoles = []

function cadastrar() {
    
    const escreverconsole = prompt("Digite o nome do Console")
     if(escreverconsole === null || escreverconsole.trim() === ""){
        alert("O nome do console é obrigatório. Digite um nome válido para continuar.")
        return
    }

    const marcaConsole = prompt ("Digite a marca do Console")
     if(marcaConsole === null || marcaConsole.trim() === ""){
        alert("O nome da marca é obrigatório. Digite uma marca válida para continuar.")
        return
    }

    const anoConsole = prompt("Digite o ano do Console")
     if(anoConsole === null || anoConsole.trim() === ""){
        alert("O ano do console é obrigatório. Digite um ano válido para continuar.")
        return
    }
    
   
    
    const videogame = {
        id: consoles.length + 1,
        nome: escreverconsole,
        marca: marcaConsole,
        ano: anoConsole
    } 


    consoles.push(videogame)
    alert("Console cadastrado com sucesso!")
}


function listar() {
    console.clear()

     if(consoles <= 0 ){
        alert("Nenhum item cadastrado. Adicione um item para continuar.")
    }

    else{
        console.log("### Consoles ###")
        for(let i = 0; i < consoles.length; i++){
            console.log(`id: ${consoles[i].id} | Console: ${consoles[i].nome} | Marca: ${consoles[i].marca} | Ano: ${consoles[i].ano}`)
        }
    }
   

}

function buscar() {

     if(consoles <= 0 ){
        alert("Nenhum item cadastrado. Adicione um item para continuar.")
    }
    else{

        const consoleProucurado = prompt ("Digite o nome do console que deseja buscar")
        
        const consoleEncontrado = consoles.find(videogame => videogame.nome == consoleProucurado)

        if(consoleProucurado){
            alert("Console encontrado: " + consoleEncontrado.nome + " |" + " id: " + consoleEncontrado.id +  " |"  + " Marca: " + consoleEncontrado.marca + " |" + " Ano: " + consoleEncontrado.ano)
        }
        else{
            console.log("")
        }
    }
}

function deletar() {
    consoles.pop()
    alert("Removido com sucesso!.")
}

function removerId(){
    const idProcurado = prompt ("Digite o ID do console que deseja remover.")

    const indexDoconsole = consoles.findIndex(a => a.id == idProcurado)

    if(indexDoconsole != -1){
        consoles.splice(indexDoconsole, 1)
        alert("Removido com sucesso !")
    }else{
        alert("O ID inserido é inválido. Digite um ID válido.")
    }
}

function limparTudo() {

    const verificacao = confirm("Tem certeza de que deseja remover todos os consoles? Essa ação não poderá ser desfeita.")

    if(verificacao === true){
        consoles = []
        alert("Lista limpa com sucesso!")
    }else{
        alert("Nenhum item foi removido. Verifique os dados informados e tente novamente.")
    }
}

function exibirConsoles() {
    
    alert("Total de consoles cadastrados: " + consoles.length)
}