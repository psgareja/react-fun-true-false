class App extends React.Component {
  render() {
    return (
      <div>
        <h1>hi frome app js</h1>
        <Hello
        s1="🍇",
        s2="🍑",
        s3="🍓"
        
        />

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))