import { Message } from "element-ui"
function mycopy(text) {
    console.log(text);
    let textareaEl = document.createElement('textarea');
    textareaEl.setAttribute('readonly', 'readonly'); // 防止手机上弹出软键盘
    textareaEl.value = text;
    document.body.appendChild(textareaEl);
    textareaEl.select();
    let success = document.execCommand('copy');
    document.body.removeChild(textareaEl);
    if(success) {
        Message.success('copy success')
    }
    return success;
}
export default {
    bind:(el,building)=> {
        // console.log(el,building)
        el.removeEventListener('click',mycopy)
        el.addEventListener('click',()=>mycopy(building.value))
        // el.onclick = mycopy(building.value)
    },
    update:(el,building) =>{
        el.removeEventListener('click',mycopy)
		el.addEventListener('click',()=>mycopy(building.value))
        // el.onclick = mycopy(building.value)
    },
    unbind:(el)=> {
        el.removeEventListener('click',mycopy)
        // el.onclick = undefined
    }
}