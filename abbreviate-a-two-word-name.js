function abbrevName(name){

    const words = name.split(' ');

    if (words.length == 2) {

        const initial = words.map(word => word.charAt(0).toUpperCase());

        return initial.join('.');

    } else {
        return 'Invalid Name';
    }

}

const answer = abbrevName('Sam Harris');

console.log(typeof answer)

console.log(answer);