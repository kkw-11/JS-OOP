let memberArray = ['egoing', 'graphittie', 'leezhece'];
console.log(memberArray[2]);

let memberObject = {
    manager:'egoine',
    developer:'graphittie',
    designer:'leezhece'
}

memberObject.designer = 'leezche';
console.log(memberObject.designer);
console.log(memberObject['designer']);
delete memberObject.manager;

console.log('after delete memberObject.manager', memberObject.manager);