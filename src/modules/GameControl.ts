// 核心类 游戏控制器，控制所有类
// 引入其它类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl{
    // 定义三个属性
    // 蛇,食物,计分牌
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;
    // 创建一个属性，存储蛇的移动方向
    direction:string='';

    // 创建一个属性用来记录游戏是否结束
    isLive:Boolean=true;

    constructor(){
        this.snake=new Snake();
        this.food=new Food();
        this.scorePanel=new ScorePanel();
        this.init()
    }

    // init 游戏的初始化方法
    init(){
        // 绑定键盘按下事件
        // this指向问题
        document.addEventListener('keydown',this.keydownHandler.bind(this))
        // 调用run方法，移动蛇
        this.run()
        // setInterval(()=>{
        //     this.run()
        // },300-(this.scorePanel.level-1)*30)
    }
    // 创建一个键盘按下的响应函数
    keydownHandler(event:KeyboardEvent){
        // 检查event.key是否合法（上下左右）

        this.direction=event.key;
    }

    // 创建蛇移动的方法
    run(){
        // 根据direction移动
        // 获取蛇现在位置
        let X=this.snake.X;
        let Y=this.snake.Y;
        switch (this.direction) {
            case 'ArrowUp':
            case 'Up': 
                Y-=10;               
                break;
            case 'ArrowDown':
            case 'Down':
                Y+=10;                   
                break;
            case 'ArrowLeft':
            case 'Left': 
                X-=10;                  
                break;
            case 'ArrowRight':
            case 'Right':
                X+=10;                 
                break;
        }

        // 检查蛇是否吃到食物
        this.checkEat(X,Y);       


        // 修改蛇的位置
        try {
           this.snake.X=X;
           this.snake.Y=Y; 
        } catch (error) {
            // 出现异常
            alert(error+'  你的得分是：'+this.scorePanel.score)
            this.isLive=false;
        }

        

        this.isLive && setTimeout(() => {
            this.run()
        }, 300-(this.scorePanel.level-1)*30);
    }

    // 定义一个方法，判断是否吃到食物
    checkEat(X:number,Y:number){
        if(X===this.food.X && Y===this.food.Y){
            // 分数
            this.scorePanel.addScore();
            // 重置食物
            this.food.change()
            // 蛇身增加
            this.snake.addBody()
        }
    }

}

export default GameControl