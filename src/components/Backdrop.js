const Backdrop = (props) => {
    return (
        <div className='fixed h-screen w-full top-0 left-0 bg-black bg-opacity-75' onClick={props.closeModal}></div>
    )
}

export default Backdrop
