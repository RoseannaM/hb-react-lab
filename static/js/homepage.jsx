class Homepage extends React.Component {
	render(){
		return (
            <div>
            <h1>Welcome!</h1>
            <br/>
            
            <img id="homepage-img" src="/static/img/balloonicorn.jpg"/>
            <br/>
            <button>
                <a class="btn" href="/cards">Cards</a>
            </button>
            </div>
            );
	}
}

ReactDOM.render(<Homepage />, document.getElementById('app'));