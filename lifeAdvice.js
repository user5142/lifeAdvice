// Generate a random # from 0 -> num - 1
const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num)
}

// Store the adlibs as nested arrays
const adlibs = {
    adlibs1: ['to eat, drink and be merry!', 'to get rich or die trying.', 'to protect the motherland.', 'to find inner peace.'],
    adlibs2: ['Dogs', 'Friends and family', 'Good food and festivities', 'The mysteries of existence', 'Money and fast cars'],
    adlibs3: ['make lemonade.', 'throw them back.', 'learn how to juggle.', 'make sure they\'re organic.']
}

// Store the 'life advice' messages in an array
let lifeAdvice = []

// Iterate over the prompts
for (arr in adlibs) {
    let arrIdx = generateRandomNumber(adlibs[arr].length)

    // Push the prompts + randomized adlibs into lifeAdvice 
    switch (arr) {
        case 'adlibs1':
            lifeAdvice.push(`The purpose of life is ${adlibs[arr][arrIdx]}`)
            break
        case 'adlibs2':
            lifeAdvice.push(`${adlibs[arr][arrIdx]} make life worth living.`)
            break
        case 'adlibs3':
            lifeAdvice.push(`When life gives you lemons, ${adlibs[arr][arrIdx]}`)
            break
        default:
            lifeAdvice.push('No life advice available :(')
    }
}

const formatAdvice = (advice) => {
    const formatted = lifeAdvice.join('\n')
    console.log(formatted)
}

formatAdvice(lifeAdvice);