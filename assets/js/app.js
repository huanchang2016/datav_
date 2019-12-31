// 全局公用js 方法
// 暂存变量，判断确认/取消操作
projectSubmit = false;
function ensureReferModal(option) {
    console.log(option);
    let config = {};
    if(!option) {
        config = {
            title: '操作提示',
            message: '确认要继续吗？',
            okText: '确定',
            cancelText: '取消',
            url: "'./register.html'"
        };
    }else {
        config = option;
    }
    var template = `<div class="project-confirm-modal d-flex flex-column">
            <div class="project-modal-title">${config.title}</div>
            <div class="project-modal-body">
                <div class="project-modal-content text-center">
                    ${config.message}
                </div>
            </div>
            <div class="project-modal-footer d-flex">
                <span class="close-modal d-inline-block text-center" onClick="closeModal('.project-confirm-modal')">${config.cancelText}</span>
                <span class="ensure-modal-btn d-inline-block text-center" onClick="ensureOper('.project-confirm-modal', ${config.url})">${config.okText}</span>
            </div>
        </div>`;
    
        $("body").append(template);
    
}

function closeModal(className) {
    console.log('cancel')
    $(className).remove();
    projectSubmit = false;
}

function ensureOper(className, url) {
    console.log('ensure');
    $(className).remove();
    projectSubmit = true;
}