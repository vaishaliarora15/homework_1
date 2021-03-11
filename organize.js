let fs = require('fs');
let path = require("path");
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
let input = process.argv.slice(2);
let toOrganizeDirPath = input[0];
let organizedFilesPath = path.join(toOrganizeDirPath, "Organized_Files");
function getFolderName(dirpath){
    let strArr = dirpath.split(".");
    let ext = strArr.pop();
    for(let key in types){
        for(let i = 0; i<types[key].length;i++){
            if(types[key][i] == ext){
                return key;
            }
        }
    }
    return "Others";
}
function dirCreator(dirpath){
    if(fs.existsSync(dirpath)==false){
        fs.mkdirSync(dirpath);
    }
} 
dirCreator(organizedFilesPath);
    for(let key in types){
        let innerDirPath = path.join(organizedFilesPath, key);
        dirCreator(innerDirPath);
    }
    let otherPath = path.join(organizedFilesPath, "Others");
    dirCreator(otherPath);
    orgFiles(toOrganizeDirPath);
    function orgFiles(src){
        let isFile = isFileorNot(dirpath);
        if(isFile == true){
            let destFolderName = getFolderName(dirpath);
            let destFolderPath = path.join(organizedFilesPath, destFolderName);
            copytodest(dirpath, destFolderPath);
        }
        else{
            let content = getContent(dirpath);
            for(let i=0; i<content.length; i++){
                let childPath = path.join(dirpath, content[i]);
                orgFiles(childPath);
            }
        }
    }
orgFiles(toOrganizeDirPath);