function firstWord(s) {
  // your code here
	    str = str.trim();

    // Find the index of the first space
    let firstSpaceIndex = str.indexOf(' ');

    // If there is no space, return the entire string
    if (firstSpaceIndex === -1) {
        return str;
    }

    // Return the substring up to the first space
    return str.substring(0, firstSpaceIndex);

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
