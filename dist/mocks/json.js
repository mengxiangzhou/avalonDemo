define(["pub","mock"],function(e){var i={errorMsg:!1,data:[{id:"001",title:"顺丰快递",orderNo:"100200300400",img1:"res/img/expImg1.jpg",img2:"res/img/expImg2.jpg",arriveTime:"2015-07-25  18:58",state:0,appraise:0},{id:"002",title:"顺丰快递",orderNo:"100200300400",img1:"res/img/expImg1.jpg",img2:"res/img/expImg2.jpg",arriveTime:"2015-08-25  18:58",state:1,appraise:1},{id:"003",title:"顺丰快递",orderNo:"100200300400",img1:"res/img/expImg1.jpg",img2:"res/img/expImg2.jpg",arriveTime:"2015-09-25  18:58",state:1,appraise:2},{id:"004",title:"顺丰快递",orderNo:"100200300400",img1:"res/img/expImg1.jpg",img2:"res/img/expImg2.jpg",arriveTime:"2015-10-25  18:58",state:1,appraise:0},{id:"005",title:"顺丰快递",orderNo:"100200300400",img1:"res/img/expImg1.jpg",img2:"res/img/expImg2.jpg",arriveTime:"2015-09-25  18:58",state:1,appraise:3}]},r={errorMsg:!1,data:[{id:"001",title:"顺丰快递",orderNo:"100200300400",arriveTime:"2015-07-25  18:58",name:"名字一",phone:"13688889999",state:1},{id:"002",state:0}]};Mock.mock("api/app/packageInfo",i),Mock.mock("api/app/packageSendInfo",r)});