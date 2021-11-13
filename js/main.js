//Table of Content 
const links= [
    {
        label: 'Week 1',
        url: 'week1/index.html',
        title: 'Week 2 Link'
    },
    {
        label: 'Week 2',
        url: 'week2/index.html',
        title: 'Week 3 Link'
    },
    {
        label: 'Week 3',
        url: 'week3/index.html',
        title: 'Week 4 Link'
    },
    {
        label: 'Week 4',
        url: 'week4/index.html',
        title: 'Week 5 Link'
    },
    {
        label: 'Week 5',
        url: 'week5/index.html',
        title: 'Week 6 Link'
    },
    {
        label: 'Week 6',
        url: 'week6/index.html',
        title: 'Week 6 Link'
    },
    {
        label:'Week 7',
        url: 'week7/index.html',
        title: 'Week 7 Link',
    },
    {
        label: 'Week 8',
        url: 'week8/index.html',
        title: 'Week 8 Link'

    },
    {
        label: 'Week 9',
        url: 'week9/index-START.html',
        title: 'Week 10 Link'

    },
    {
        label: 'Week 10',
        url: 'week10/',
        title: 'Week 11 Link'

    },
    {
        label: 'Week 11',
        url: 'week11/',
        title: 'Week 12 Link'

    },
    {
        label: 'Week 12',
        url: 'week12/',
        title: 'Week 13 Link'

    },
    {
        label: 'Week 13',
        url: 'week13/',
        title: 'Week 14 Link'

    },
    
    {
        label: 'Week 14',
        url: 'week14/',
        title: 'Week 14 Link'

    }
    
]
function myFunction(){
    for(let i=0; i < links.length; i++){
        let elem= document.getElementsByTagName('ol');
        let list= document.createElement('li');
        let anchor= document.createElement('a');
        anchor.innerText= links[i].label;
        anchor.href= links[i].url;
        anchor.title= links[i].title;
        list.appendChild(anchor);
        elem[0].appendChild(list);
    }
}
myFunction();