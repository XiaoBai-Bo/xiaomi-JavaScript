var vm =new Vue({
				el:"#app2",
				data:{
					flag:false,
					keyword:'',
					myData:[],
					now:-1  //当前选中项的索引
				},
				methods:{
					change(){
						this.flag=false;
					},
					changeUp(){
						this.flag=true;
					},
					getData(e){
						if(e.keyCode==38||e.keyCode==40)  //如果按方向键上下，不发送请求。
						     return;
						     if(e.keyCode==13){     //按下enter键，跳转到百度搜索结果页。
						     	window.open('https://www.baidu.com/s?wd='+this.keyword);
						     }
//						    https://api2.order.mi.com/search/query?query=aaba&page_index=1&jsonpcallback=xmsearch 
//						this.$http.jsonp('https://api2.order.mi.com/search/query',{
//							params:{
//								query:this.keyword,
//								page_index:1,
//							},
//							jsonp:'jsonpcallback',    //百度使用jsonp的参数名为cb，需要修改为cb
//							jsonpCallback:'xmsearch'
							this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
							params:{
								wd:this.keyword
							},
							jsonp:'cb'
						}).then(function(response){
							this.myData=response.data.s;
						});
					},
					changedown(){  //键盘下事件
						this.now++;
						this.keyword=this.myData[this.now];
						if(this.now==this.myData.length)
						      this.now=-1;
					},
					changeup(){   //键盘上事件
						this.now--;
						this.keyword=this.myData[this.now];
						if(this.now==-2)
						 this.now=this.myData.length-1;
					}
				}
			})
