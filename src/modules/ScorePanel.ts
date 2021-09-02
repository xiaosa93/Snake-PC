// 定义记分牌的类
class ScorePanel{
    score=0;
    level=1;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;

    // 设置一个变量限制等级
    maxLevel:number;
    // 设置一个变量表示多少分升级
    upScore:number;

    // maxLevel：若传值，最大等级就是你传的值，否则默认是10
    // upScore：若传值，升级的分数就是你传的值，否则默认是10
    constructor(maxLevel:number=10,upScore:number=5){
        // scoreEle和levelEle表示分数和等级所在的元素，在构造函数中初始化
        this.scoreEle=document.getElementById('score')!;
        this.levelEle=document.getElementById('level')!;
        this.maxLevel=maxLevel;
        this.upScore=upScore;
    }
    // 设置加分方法
    addScore(){
        this.score++;
        this.scoreEle.innerHTML=this.score+''
        // 判断分数是多少
        if(this.score%this.upScore===0){
            this.levelUp()
        }
    }
    // 提升等级方法
    levelUp(){
        if(this.level<this.maxLevel){
            this.levelEle.innerHTML=++this.level+''
        }
        
    }
}
export default ScorePanel;