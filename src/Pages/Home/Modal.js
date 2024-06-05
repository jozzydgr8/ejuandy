import ReactDom from 'react-dom'
const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px',
    zIndex: 1000,
    background:'#fff',
    borderRadius:'8px'
}

const overLay = {
    position:'fixed',
    top:0,
    left:0,
    bottom:0,
    right:0,
    background: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}
export const Modal = ({children, open})=>{
    if (!open){
        return null
    }
    return ReactDom.createPortal(
        <>
        <div style={overLay}>
        <div style={modalStyle}>
            {children}
            
        </div>
        </div>
        
        </>,
        document.getElementById('portal')
        
    )
}