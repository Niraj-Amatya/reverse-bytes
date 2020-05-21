function reverseBytes(bytes) {
	let tempArray = [];
	// this is the number of bits in 1 byte
	const bits = 8;

	// looping and adding i with bits to get each chunk of 8 numbers array
	for (let i = 0; i < bytes.length; i += bits) {
		// with slice i is the starting index '0' and added with bits
		let chunkArray = bytes.slice(i, i + bits);
		tempArray.push(chunkArray);
	}

	// reversing the two array inside tempArray
	// join() to join two array inside the tempArray which converts to string
	// using split to convert to array and map and Number to change string array to number
	let result = tempArray.reverse().join().split(',').map(Number);

	// checking if bytes array passed has any value, return empty array if so, otherwise return result
	return bytes.length > 0 ? result : [];
}

module.exports = {
	reverseBytes
};
