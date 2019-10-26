function fetchUrl(username,cb){
  setTimeout(() => {
    cb('https://raw.githubusercontent.com/AddJunZ/Front-End-Interview/master/img/pay.jpg')
  }, 1000);
}

// 作为h函数的第二个参数
const Avatar = {
  props:['src'],
  template:`<img :src="src" alt=""/>`
}

function withAvatarURL(InnerComponent){
  return {
    props:['username'],
    data(){
      return {
        url:`https://raw.githubusercontent.com/AddJunZ/Front-End-Interview/master/img/author.jpg`
      }
    },
    created(){
      fetchUrl(this.username,url=>{
        this.url = url
      })
    },
    render(h){
      return h(InnerComponent,{
        props:{
          src:this.url,
          attrs:this.$attrs
        }
      },this.$slots.default)
    }
  }
}

const SmartAvatar = withAvatarURL(Avatar)