import "./style.css"

function throwDown() {
    document.getElementById("hello").classList.add("throw-down")
}

function Hello() {
    return (
        <div id='hello'>
            <p>Hello!</p>
            <div className='pump-fist'>
                <div className='border'></div>
                <span onClick={throwDown}>👊</span>
            </div>
        </div>
    )
}

export default Hello