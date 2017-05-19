module.exports = function main(number) {
	var number1 = [
	'._.', '...', '._.', '._.', '...', 
	'._.', '._.', '._.', '._.', '._.']
	var number2 = [
	'|.|', '..|', '._|', '._|', '|_|',
	'|_.', '|_.', '..|', '|_|', '|_|']
	var number3 = [
	'|_|', '..|', '|_.', '._|', '..|',
	'._|', '|_|', '..|', '|_|', '..|']

    var n1 = []
    var n2 = []
    var n3 = []

    let size = number.length
    var tmp = 0

    for (let i = 0; i < size; i++)
    {
    	tmp = number[i] - '0'
    	n1.push(number1[tmp])
    	n2.push(number2[tmp])
    	n3.push(number3[tmp])
    }
    n1 = n1.join(' ')
    n2 = n2.join(' ')
    n3 = n3.join(' ')
    var n = [n1, n2, n3].join('\n') + '\n'
    return n
};