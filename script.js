const textInput = document.getElementById('textInput');
const totalChar = document.getElementById('totalChar');
const noSpaceChar = document.getElementById('noSpaceChar');
const lineCount = document.getElementById('lineCount');
const clearBtn = document.getElementById('clearBtn');

textInput.addEventListener('input', () => {
    const text = textInput.value;
    
    // 全文字数
    totalChar.textContent = text.length;
    
    // 空白抜きの文字数 (スペース、タブ、改行を除外)
    noSpaceChar.textContent = text.replace(/\s+/g, '').length;
    
    // 改行数
    lineCount.textContent = text ? text.split('\n').length : 0;
});

clearBtn.addEventListener('click', () => {
    textInput.value = '';
    totalChar.textContent = '0';
    noSpaceChar.textContent = '0';
    lineCount.textContent = '0';
});