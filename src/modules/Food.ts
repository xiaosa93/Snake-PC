// 定义食物类
class Food{
    // 定义属性，表示食物对应的元素
    element:HTMLElement;

    constructor(){
        // 获取页面中的food元素，并赋值给element
        this.element=document.getElementById('food')!;
    }

    // 定义一个获取食物x轴坐标的方法
    get X(){
        return this.element.offsetLeft;
    }
    // 定义一个获取食物y轴坐标的方法
    get Y(){
        return this.element.offsetTop;
    }
    // 修改食物位置
    change(){
        // 生成随机位置  0-290
        // 蛇移动一次就是一格--10px，因此食物的位置必须整十
        let top= Math.round(Math.random()*29)*10 ;
        let left= Math.round(Math.random()*29)*10 ;
        this.element.style.left=left+'px';
        this.element.style.top=top+'px';
    }
}

export default Food;