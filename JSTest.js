const NFTs = [ ] 
function minNFT(_name , _eyecolor , _shirtType , _bling){
const NFT = { 
    "name" : _name,
    "eyecolor" : _eyecolor ,
    "shirtType" : _shirtType ,
    "bling" : _bling

}
NFTs.push(NFT);
console.log("Minted: " + _name);
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs(){
    for(let i=0; i<NFTs.length; i++){
        console.log("\nID: \t\t" + (i+1));
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("EyeColour: \t" + NFTs[i].eyecolor);
        console.log("ShirtType:  " + NFTs[i].shirtType);
        console.log("Bling: \t\t" + NFTs[i].bling);
    }


}
// print the total number of NFTs we have minted to the console
function getTotalSupply(){
console.log("\n" + NFTs.length);
}
// call your functions below this line
minNFT("Ram ","Orange","Shirt","Gold chain");
minNFT("Harshit ","White","Jacket","Silver chain");
minNFT("Priya ","Violet","Hoodie","Gold chain");
minNFT("Sumit","Black","Shirt","Silver chain");
listNFTs();
getTotalSupply();
