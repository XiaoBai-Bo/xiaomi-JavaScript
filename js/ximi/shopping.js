var vm=new Vue({
				el:"#app",
				data:{
					users:[
						{name:'小米6',price:1599,count:0},
						{name:'小米7',price:1699,count:0},
						{name:'小米8',price:2699,count:0},
						{name:'小米9',price:3699,count:0}
					],
				    user:{			
				    
				    },
				    nowIndex:-1   //当前要删除项的索引
				},
				methods:{
					addUser:function(){	
							this.users.push(this.user);   
							this.user={};													
					},
					deleteuser:function(){
						if(this.nowIndex===-1){   //删除所有
							this.users=[];
						}else{
							this.users.splice(this.nowIndex,1);   //从指定索引位置开始删除，删除一个。							
						}
					}
					
				},
				computed:{
					totleprice:function(){      //计算总共价格
						var totle=0;
						for(var i=0;i<this.users.length;i++){
							var item=this.users[i];
							totle+=item.price*item.count;     
						}
						return totle.toString().replace(/\B(?=(\d{3})+$)/g,',');  //千位分隔符的转换
					}
				}
			})
console.log(vm.users.length);


