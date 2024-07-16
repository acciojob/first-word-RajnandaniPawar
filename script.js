function firstWord(s) {
  // your code here
	    s = s.trim();

    // Find the index of the first space
    let firstSpaceIndex = s.indexOf(' ');

    // If there is no space, return the entire string
    if (firstSpaceIndex === -1) {
        return s;
    }

    // Return the substring up to the first space
    return s.substring(0, firstSpaceIndex);

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
