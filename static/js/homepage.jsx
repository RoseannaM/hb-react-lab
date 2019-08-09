class Homepage extends React.Component {
	render(){
		return (
            <div>
            <br/>
            <img id="homepage-img" src="/static/img/balloonicorn.jpg"/>
            <br/>
            <div id="btn-container">
            <button>
                <a className="btn" href="/cards">Cards</a>
            </button>
            <button>
                <a className="btn" href="/about">About</a>
            </button>
            </div>
            </div>
            );
	}
}

ReactDOM.render(<Homepage />, document.getElementById('app'));