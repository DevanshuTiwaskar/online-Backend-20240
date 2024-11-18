//fs is a module that allows you to interact with the file system
const fs = require("fs");
const { constrainedMemory } = require("process");



///// For creating file
// // fs.writeFile(path, data[, options], callback)

fs.writeFile("file.txt","my name is devanshu", function(err){
    if(err) console.log(err);
        else console.log("done");
})

////---------------------------------------------------------------------------------------------------------------------

///// For reading file 
// // fs.readFile(Path[,options],callback)


fs.readFile("file.txt",function(err, data){
    if(err) console.log(err)
        else console.log(data)
})

///output get = <buffer 68 65 69 30 40 95 92 9c 9f> == this in hexadecimal == it is (my name is devanshu)
//to get this we want use utf8


fs.readFile("file.txt","utf8",function(err, data){
    if(err) console.log(err)
        else console.log(data)
})

//now out get my name is devanshu

////---------------------------------------------------------------------------------------------------------------------


////// For add date in existing file
// // fs.appendFile(path, data[, options], callback) 

fs.appendFile("file.txt"," to me kay karu", function(err){
    if(err) console.log(err);
    else console.log("append")     
})

////---------------------------------------------------------------------------------------------------------------------

////// FOr rename the file
// // fs.rename(oldPath, newPath, callback)

fs.rename("new file.txt","file.txt",function(err){
    if(err) console.log(err)
        else console.log("doner")
})

////---------------------------------------------------------------------------------------------------------------------

/////For copy the file
// fs.copyFile(src, dest[, mode], callback)

fs.copyFile("file.txt","./copy/copyfile.text", function(err){
   if(err) console.log(err)
    else console.log("copy")
   
})

////---------------------------------------------------------------------------------------------------------------------

///// For deleting folder
// // fs.unlink(path, callback) ==> delete the file

// fs.unlink("file.txt",function(){
//     if(err) console.log(err)
//         else console.log("deleted") 
// })

////---------------------------------------------------------------------------------------------------------------------

///// For creating folder
// //fs.rmdir(path[, options], callback) ===:> delete the empty folder

fs.rmdir("./copy",function(err){
    if(err) console.log(err)
        else console.log("emyt folder deleted")
})

////---------------------------------------------------------------------------------------------------------------------


// ===:> this well delete whole folder

fs.rmdir("./copy",{recursive: true},function(err){
    if(err) console.log(err)
        else console.log("whole folder deleted")
})

////---------------------------------------------------------------------------------------------------------------------


///// reading folder exploring directory contents
// //fs.readdir(path[,option],callback)


fs.readdir("lolo", function(err, files){
    if(err) console.log(err)
        else console.log(files)
})

//this well give you this

[ 'guilly', 'hello', 'polo.txt', 'somedata.txt'] // in this can't find which is file or folder



fs.readdir("lolo",{writeFile: true}, function(err, files){
    if(err) console.log(err)
        else console.log(files)
})


///this well give filr type wehter it  file ot folder

///dirent {name: 'guilly', path: 'lolo', [symbol(type)]: 1 },  --------file
///dirent {name: 'hello', path: 'lolo', [symbol(type)]: 2 },  --------this folder
///dirent {name: 'polo.txt', path: 'lolo', [symbol(type)]: 2 }, --------this folder
///dirent {name: 'somedata.txt', path: 'lolo', [symbol(type)]: 1 }, --------this file