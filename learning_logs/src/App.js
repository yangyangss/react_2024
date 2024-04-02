import React, { useState } from "react";
import Meals from "./components/meals/Meals";

// 模拟一组食物数据
const MEALS_DATA = [
  {
      id: '1',
      title: '汉堡包',
      desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
      price: 12,
      img: '/images/meals/1.png'
  },
  {
      id: '2',
      title: '双层吉士汉堡',
      desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
      price: 20,
      img: '/images/meals/2.png'
  },
  {
      id: '3',
      title: '巨无霸',
      desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
      price: 24,
      img: '/images/meals/3.png'
  }, {
      id: '4',
      title: '麦辣鸡腿汉堡',
      desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
      price: 21,
      img: '/images/meals/4.png'
  }, {
      id: '5',
      title: '板烧鸡腿堡',
      desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
      price: 22,
      img: '/images/meals/5.png'
  }, {
      id: '6',
      title: '麦香鸡',
      desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
      price: 14,
      img: '/images/meals/6.png'
  }, {
      id: '7',
      title: '吉士汉堡包',
      desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
      price: 12,
      img: '/images/meals/7.png'
  }
];

function App() {
  
  const [mealsData, setMealsData] = useState(MEALS_DATA);

/*
  1. 创建state，用来存储购物车的数据
  2. 向购物车中添加商品
*/

  /* useState 定义为存储对象 */
  const [cartData, setCartData] = useState({
      items:[],
      totalAmount:0,
      totalPrice:0
  });

  // 向购物车添加商品
  const addMealHandler = (meal) => {
      // 输入参数meal是要添加购物车的商品
      // 对购物车进行浅复制（即对原始对象的引用,更改了复制的值，原值也会更改）
      const newCart = {...cartData};

      //判断购物车中是否存在商品
      if(newCart.items.indexOf(meal) === -1){
        //将meal添加到购物车
        newCart.items.push(meal);

        // 修改商品的数量
        meal.amount = 1;
      }else{
        // 增加商品的数量
        meal.amount += 1;
      }
      
      // 增加总数
      newCart.totalAmount += 1;

      //增加总金额
      newCart.totalAmount += meal.price;
      
      //重新设置购物车
      setCartData(newCart)

  };

  const subMealHandler = (meal) => {
    const newCart = {...cartData};
     //判断购物车中是否存在商品
     if(newCart.items.indexOf(meal) === -1){
      //将meal添加到购物车
      newCart.items.pull(meal);

      // 修改商品的数量
      meal.amount = 0;
    }else{
      // 减少商品的数量
      meal.amount -= 1;
    }

     // 减少总数
     newCart.totalAmount -= 1;

     //减少总金额
     newCart.totalAmount -= meal.price;
     
     //重新设置购物车
     setCartData(newCart)

  }

  /*
    *   React.Fragment
    *       - 是一个专门用来作为父容器的组件
    *           它只会将它里边的子元素直接返回，不会创建任何多余的元素
    *       - 当我们希望有一个父容器
    *           但同时又不希望父容器在网页中产生多余的结构时
    *           就可以使用Fragment
    * */
  return (
    <div>    
      <Meals 
        mealsData={mealsData}
        onAdd={addMealHandler}
        onSub={subMealHandler}
      />
    </div>
  );
}

export default App;
