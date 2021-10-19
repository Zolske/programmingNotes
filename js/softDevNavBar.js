// const navBar2 = [
//     [home:   {}   title: 'home',
//                 href: '#',
//                 subLink: false
//             }],
//     [basic: {    title: 'basic',
//                 href: '#',
//                 subLink:   [['Topic_1', '#'],
//                             ['Topic_2', '#']]
//             }]
// ];


// standard path to softwareDevelopment >>> ['../../html/softwareDevelopment/.html']

const navBar = [
    [ ['HOME'],['#'], ['Software Development'],['../../html/softwareDevelopment/softDevIndex.html'], ['Zoltans Page'],['../../index.html'] ],

    [ ['BASIC'],['#'], ['RESOURCES'],['../../html/softwareDevelopment/0RESOURCES.html'], ['Portfolio Assessment Guide'],['../../html/softwareDevelopment/0PORTFOLIO_ASSESSMENT_GUIDE.html'],
      ['Programming Paradigms'],['../../html/softwareDevelopment/paradigms.html']
],
    [ ['HTML'],['#'], ['HTML & Syntax'],['../../html/softwareDevelopment/html_structure.html'], ['Semantic'],['../../html/softwareDevelopment/html_semantic.html'],
      ['Links & Media'],['../../html/softwareDevelopment/html_link_media.html'], ['Forms'],['../../html/softwareDevelopment/html_forms.html']
],
    [ ['CSS'],['#'], ['CSS Basic'],['../../html/softwareDevelopment/css_basic.html'], ['Selector & Specificity'],['../../html/softwareDevelopment/css_selectorSpecificity.html']
]
];
document.body.onload = createNavBar;                    //calls function "creatNavBar" when body is loaded

const navEl = document.createElement('nav');            //create <nav> and saves it in "navEl"
const ulEl = document.createElement('ul');              //create <ul> and saves it in "ulEl"
ulEl.setAttribute('id', 'navBarUlId');                    //set id of "navBarId" to <ul>
navEl.insertAdjacentElement('afterbegin', ulEl);        //inserts <ul> after beginning of <nav>
const mainEl = document.getElementsByTagName('main');   //selects <main> and saves it to "mainEl"
mainEl[0].insertAdjacentElement('afterbegin', navEl);   //inserts <nav> after beginning of <main>

// const liEl = document.createElement('li');              //create <li> and saves it in "liEl"
// const aEl = document.createElement('a');                //create <a> and saves it in "aEl"
// const liAEl = liEl.appendChild(aEl);   //inserts <a> after beginning of <li>

const navBarUlId = document.getElementById('navBarUlId');


 function createNavBar(){

for (i=0; i<navBar.length; i++){
    let li = document.createElement('li');
    let a = document.createElement('a');
    if(navBar[i][2] instanceof Object){
        li.setAttribute('class', 'dropdown');
        a.setAttribute('class', 'dropbtn');
    }
    a.setAttribute('href', navBar[i][1]);
    let linkName = document.createTextNode(navBar[i][0]);
    a.appendChild(linkName);
    li.appendChild(a);
    navBarUlId.appendChild(li);
    if(navBar[i][2] instanceof Object){
        let div = document.createElement('div');
        div.setAttribute('class', 'dropdown-content');
        for (z=2;z<(navBar[i].length);z+=2){
            console.log(`z ${z}`)
            let aSubLink = document.createElement('a');
            console.log(aSubLink);
            aSubLink.setAttribute('href', navBar[i][z+1]);
            let subLinkName = document.createTextNode(navBar[i][z]);
            aSubLink.appendChild(subLinkName);
            div.appendChild(aSubLink);
        }
        li.appendChild(div);
        console.log(navBar[i].length);
    }
// start >>> add title to ha class ///////////////////////////////////////////////////////////
let ha = document.getElementsByClassName('ha');
for (let i = 0; i < ha.length; i++) {
    ha[i].title = 'html attribute';
}

let he = document.getElementsByClassName('he');
for (let i = 0; i < he.length; i++) {
    he[i].title = 'html element';
}

let hv = document.getElementsByClassName('hv');
for (let i = 0; i < hv.length; i++) {
    hv[i].title = 'value';
}
// end <<< add title to ha class ///////////////////////////////////////////////////////////

//   // console.log(navBarUlId);
//   // let tempLiA = document.createElement('li');
//   // console.log(tempLiA);
//   navBarUlId.insertAdjacentElement('beforeend', liEl);
//     let tempText = document.createTextNode(navBar[i][0]);
//     document.getElementById('navBarUlId').firstChild.firstChild.textContent = "hello";
//    // console.log(tempText);
//   // navBarUlId.insertAdjacentElement('beforeend', liEl);
// //   navBarUlId.lastChild(liEl);
// //    console.log(liEl.firstChild);
// //    liEl.firstChild.textContent = navBar[i][0];
// //     console.log(`${navBar[i]}`);
// }

}
 }

//  start htmlCode /////////////////////////////////////////////////////////
// let elFigure = document.createElement('figure');
// let elFigcaption = document.createElement('figcaption');

// let htmlCode = document.getElementsByClassName('htmlCode');

