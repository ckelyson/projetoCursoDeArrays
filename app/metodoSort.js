let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosOdernados = livros.sort((a, b)=> a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOdernados)
}