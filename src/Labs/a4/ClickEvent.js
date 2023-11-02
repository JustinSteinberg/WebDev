function ClickEvent() {
    const hello = () => {
      alert("Hello World!");
    };
    const good = () => {
      alert("Life is Good!");
    };
    const buttonStyle = {marginLeft: "5px", padding: 5};
    return (
      <div>
        <h2>Click Event</h2>
        <button onClick={hello} style={buttonStyle}>
          Click Hello 1 </button>
        <button onClick={() => hello()} style={buttonStyle}>
          Click Hello 2 </button>
        <button style={buttonStyle}
          onClick={() => {
            hello();
            good();
          }}
        >
          Click Hello 3
        </button>
      </div>
    );
  }
  export default ClickEvent;