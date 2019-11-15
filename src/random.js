const rdsym = () => {
    const string = "*/><?+-";
    const temp = Math.floor(Math.random() * (string.length));
    return string[temp];
}

export const rdNumber = String.fromCharCode(Math.floor(Math.random() * 10 + 48));
// floor lam tron xuong 

export const rdUpper = String.fromCharCode(Math.floor(Math.random() * 26 + 65));

export const rdLower = String.fromCharCode(Math.floor(Math.random() * 26 + 97));

export const rdSymbol = rdsym();