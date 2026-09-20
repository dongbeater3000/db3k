const COLORS = ['red', 'gold', 'yellow', 'green', 'aqua', 'blue', 'light_purple', 'white', 'gray']
ServerEvents.loaded(event => {
	const {server} = event;
	COLORS.forEach(color => {
		server.runCommandSilent(`team add name_colors.${color} "${color}"`);
    server.runCommandSilent(`team modify name_colors.${color} color ${color}`);
	});
})

PlayerEvents.loggedIn(event => {
	const {player, server} = event;
	const val = getNameValue(String(player.username));
	const color = COLORS[val % COLORS.length]

	console.log(`${player.username} has val ${val}, assigning color ${color}`);
	server.runCommandSilent(`team join name_colors.${color} ${player.username}`);
})

// === Functions ===
function getNameValue(pname) {
    let val = 0;
    const pnamelen = pname.length

    for(let i = 0; i < pnamelen; i++) {
        let c_val = getByteVal(pname[i]);

        let reverse_i = pnamelen - i;
        if (pnamelen % 2 === 1) reverse_i -= 1;
        if (reverse_i % 4 >= 2) c_val = -c_val;

        val += c_val;
    }
    return val;
}

// Rhino improperly implements String.charCodeAt() identically to String.charAt() 
// so had to manually recreate it. KubeJS is a perfect mod with no issues
const ASCII_REFERENCE = {
    "0": 48, "1": 49, "2": 50, "3": 51, "4": 52, "5": 53, "6": 54, "7": 55, "8": 56, "9": 57,
    "A": 65, "B": 66, "C": 67, "D": 68, "E": 69, "F": 70, "G": 71, "H": 72, "I": 73, "J": 74,
    "K": 75, "L": 76, "M": 77, "N": 78, "O": 79, "P": 80, "Q": 81, "R": 82, "S": 83, "T": 84,
    "U": 85, "V": 86, "W": 87, "X": 88, "Y": 89, "Z": 90,
    "a": 97, "b": 98, "c": 99, "d": 100, "e": 101, "f": 102, "g": 103, "h": 104, "i": 105,
    "j": 106, "k": 107, "l": 108, "m": 109, "n": 110, "o": 111, "p": 112, "q": 113, "r": 114,
    "s": 115, "t": 116, "u": 117, "v": 118, "w": 119, "x": 120, "y": 121, "z": 122,
    "_": 95, "-": 45, ".": 46
};
function getByteVal(char) {
    return ASCII_REFERENCE[char] || 0;
}