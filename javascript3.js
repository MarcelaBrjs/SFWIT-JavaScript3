// JAVASCRIPT 3. ¡MUÉSTRAME UN ANIMAL!

// Instrucciones:
    // Crea un menú con una lista de animales.
    // Permite que el usuario pueda seleccionar el animal.
    // Muestra por consola un diseño del animal basado en la decisión del usuario.

const readline = require('readline');

function readInput() {
    const interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    
    return new Promise(resolve => interface.question("Enter an option: ", answer => {
        interface.close();            
        resolve(answer);
    }))
};

(async () => {
    while (true) {
        console.log("Please select an animal:");
        console.log("1. Dog");
        console.log("2. Wolf");
        console.log("0. Exit");
    
        let option = await readInput();
        option = parseInt(option);
    
        if (option == 1) {
            console.log("       _=,_");
            console.log("    o_/6 /#\\");
            console.log("    \__ |##/");
            console.log("     ='|--\\");
            console.log("       /   #'-.");
            console.log("       \#|_   _'-. /");
            console.log('        |/ \_( # |" ');
            console.log("       C/ ,--___/");
        } else if (option == 2) {
            console.log("                     .");
            console.log("                    / V\\");
            console.log("                  / `  /");
            console.log("                 <<   |");
            console.log("                 /    |");
            console.log("               /      |");
            console.log("             /        |");
            console.log("           /    \  \ /");
            console.log("          (      ) | |");
            console.log("  ________|   _/_  | |");
            console.log("<__________\______)\__)");
        } else if (option == 0) {
            break;
        } else {
            console.log("Enter a valid option.")
        }
    }
})();





    







