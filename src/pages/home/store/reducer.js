import { fromJS } from 'immutable';

const defaultData = fromJS({
	articleList:[{
		id:1,
		title:'一位媒婆的实话实说：这三种女人，男人都会拒绝',
		desc:'每个人到了谈婚论嫁的年龄，即使自己不着急找另一半，家里人也会催着你找另一半，结婚生子这个问题，似乎每个人都逃不过去，是人生必须经历的一部分。 幸...',
		ImgURL:'//upload-images.jianshu.io/upload_images/16050459-595963b08d6462d8.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
	},{
		id:2,
		title:'一位媒婆的实话实说：这三种女人，男人都会拒绝',
		desc:'每个人到了谈婚论嫁的年龄，即使自己不着急找另一半，家里人也会催着你找另一半，结婚生子这个问题，似乎每个人都逃不过去，是人生必须经历的一部分。 幸...',
		ImgURL:'//upload-images.jianshu.io/upload_images/16050459-595963b08d6462d8.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
	},{
		id:3,
		title:'一位媒婆的实话实说：这三种女人，男人都会拒绝',
		desc:'每个人到了谈婚论嫁的年龄，即使自己不着急找另一半，家里人也会催着你找另一半，结婚生子这个问题，似乎每个人都逃不过去，是人生必须经历的一部分。 幸...',
		ImgURL:'//upload-images.jianshu.io/upload_images/16050459-595963b08d6462d8.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
	},{
		id:4,
		title:'一位媒婆的实话实说：这三种女人，男人都会拒绝',
		desc:'每个人到了谈婚论嫁的年龄，即使自己不着急找另一半，家里人也会催着你找另一半，结婚生子这个问题，似乎每个人都逃不过去，是人生必须经历的一部分。 幸...',
		ImgURL:'//upload-images.jianshu.io/upload_images/16050459-595963b08d6462d8.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
	},{
		id:5,
		title:'一位媒婆的实话实说：这三种女人，男人都会拒绝',
		desc:'每个人到了谈婚论嫁的年龄，即使自己不着急找另一半，家里人也会催着你找另一半，结婚生子这个问题，似乎每个人都逃不过去，是人生必须经历的一部分。 幸...',
		ImgURL:'//upload-images.jianshu.io/upload_images/16050459-595963b08d6462d8.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
	}],
	recommend:[{
		id:1,
		imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
	},{
		id:2,
		imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
	},{
		id:3,
		imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
	},{
		id:4,
		imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
	}]

})

export default (state = defaultData,action) => {
	switch(action.type){
		default:
			return state;
	}
}