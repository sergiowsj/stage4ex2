const students = [
    
    {
        name: "João",
        nota1: 10,
        nota2: 7,
    },

    {
        name: "Pedro",
        nota1: 6,
        nota2: 5,
    },

    {
        nome: "Lucas",
        nota1: 3,
        nota2: 10,
    }
]

function media(nota1, nota2) {
    return ((nota1 + nota2) / 2).toFixed(2)
}

function mediaResult(student) {
    return`
    O aluno ${student.name} obteve uma média de ${media(student.nota1, student.nota2)}
    `
}

for (const student of students) {
    let mediaMsg = mediaResult(student)
    alert(mediaMsg)
}