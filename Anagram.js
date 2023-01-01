s1 = "anagram"
s2="nagaram"

obj1 = {}
obj2 = {}


// SUDO CODE

// 1. initialize obj1 for s1 and obj2 for s2, to store no of frequency counts correspond single char
// 2. lopp through both s1 and s2
// 3. check if char present in obj, 
//     a. if yes -> increment count for that char 
//     b. if not store char with 1
// 4. at last check if the obj1 and obj2 are same, 
//         return true if obj1 === obj2
//         return false if obj1 !=== obj2

for(char of s1){
    obj1[char] = char in obj1 ? ++obj1[char] : 1
}

for(char of s2){
    obj2[char] = char in obj2 ? ++obj2[char] : 1
}

for(char in obj1){
    obj1[char] !== obj2[char] ? console.log('false') : console.log('true') 
}

Big(O)
time complexity : O(n)
space complexity : O(n)
