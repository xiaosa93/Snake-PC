class Snake{
    // 表示蛇头的元素
    head:HTMLElement;
    // 蛇的身体(含蛇头)
    bodies:HTMLCollection;

    constructor(){
        this.head=document.querySelector('#snake>div')!;
        this.bodies=document.getElementById('snake')!.getElementsByTagName('div');
    }

    // 获取蛇的坐标（蛇头）
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }
    // 设置蛇的坐标（蛇头）
    set X(value:number){
        if(this.X===value){
            return;//若没有移动X直接返回，效率好一点
        }

        // x的合法值(0-290)
        if(value<0||value>290){
            // 说明蛇撞墙了
            throw new Error('你的小蛇撞墙了哦')
        }

        // 不允许调头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft===value){
            //继续向原来方向走
            if(value>this.X){
                // 说明向右走，此时发生调头，应继续向左走
                value=this.X-10;
            }else{
                value=this.X+10;
            }  
        }

        // 移动身体
        this.moveBody();


        this.head.style.left=value+'px'

        // 检查有没有撞到自己
        this.checkHeadBody()
    }
    set Y(value:number){
        if(this.Y===value){
            return;
        }
        if(value<0||value>290){
            // 说明蛇撞墙了
            throw new Error('你的小蛇撞墙了哦')
        }

        // 不允许调头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop===value){
            if(value>this.Y){
                // 说明向下走，此时发生调头，应继续向左走
                value=this.Y-10;
            }else{
                value=this.Y+10;
            } 
        }
         

        // 移动身体
        this.moveBody();

        this.head.style.top=value+'px'

        // 检查有没有撞到自己
        this.checkHeadBody()
    }

    // 设置蛇增加身体的方法
    addBody(){
        let div=document.createElement('div')
        this.head.parentElement!.appendChild(div)
    }
    // 添加一个蛇身体移动的方法
    moveBody(){
        // 将后边身体设置为前边身体
        // 遍历所有身体
        for(let i=this.bodies.length-1;i>0;i--){
            // 获取前边身体的位置；
            let X=(this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y=(this.bodies[i-1] as HTMLElement).offsetTop;

            // 将值设为当前身体上
            (this.bodies[i] as HTMLElement).style.left=X+'px';
            (this.bodies[i] as HTMLElement).style.top=Y+'px';
        }
    }

    // 检查蛇头是否撞到自己的方法
    checkHeadBody(){
        // 获取所有身体，检查其是否和蛇头的坐标发生重叠
        for(let i=1;i<this.bodies.length;i++){
            let bd=this.bodies[i]as HTMLElement
            if(this.X===bd.offsetLeft&&this.Y===bd.offsetTop){
                // 说明撞到身体了
                throw new Error('撞到自己了！')
            }
        }
    }
}
export default Snake