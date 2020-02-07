
const users = []
for (let i=0;i<20;i++){
    const user = faker.helpers.createCard();
    users.isFavorite=false
    users.push(user)
}

//console.log(users)

class App extends React.Component{
    constructor(props){
        super();
        this.state={
            users
        }
    }
    render(){

        const generateNew=()=>{
            this.state.users.unshift(faker.helpers.createCard())
            this.setState({users:users})
        }
        const favoriteUser=(user)=>{
            const updated = this.state.users.map((element)=>{
                if(element.name===user.name){
                    element.isFavorite= !element.isFavorite
                }
                return element
            })
            this.setState({users:updated})
        }
        let counter = 0
        const userList = users.map((user)=>{
            const name = React.createElement('li',{className:"name",key:user.name},user.name);
            const userName = React.createElement('li',{className:"userName",key:user.username},user.username);
            
            if(user.isFavorite){
                counter++
                return React.createElement('ul',{className:"user favorite",key:user.name,onClick:()=>favoriteUser(user)},name,userName)
            }else{
                return React.createElement('ul',{className:"user",key:user.name,onClick:()=>favoriteUser(user)},name,userName)
            }
            //return React.createElement('div',{className:"user",key:user.name,onClick:()=>favoriteUser(user)},name,userName)
        })
        console.log(counter)
        const title = React.createElement('div',{className:"title"},`Acme Faker Favorites`)
        const count = React.createElement('div',{className:"header", onClick:()=>generateNew()},`You have ${counter} favorite users!`)
        return React.createElement('div',{className:"container"},title, count,userList)
    }

}
const root = document.querySelector("#root");
ReactDOM.render(React.createElement(App),root)
//console.log(document.querySelector(".container"))