const container = document.getElementById("app")
const content = React.createElement('div',{},
    React.createElement('p',{},'It is paragraph')
)

ReactDOM.render(content,container)